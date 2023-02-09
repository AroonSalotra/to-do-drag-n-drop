import { useEffect, useState } from "react"
import Dropzone from "./Dropzone"
import { DragDropContext } from 'react-beautiful-dnd'
import { onAuthStateChanged } from "firebase/auth"
import { auth, db } from "../firebase-config"
import {
    collection,
    getDocs,
    getDoc,
    doc,
    setDoc
} from "firebase/firestore/lite"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const Board = ({ userId, setUserId }) => {

    const [completed, setCompleted] = useState([])
    const [progress, setProgress] = useState([])
    const [tasks, setTasks] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {

        if (userId !== null) {
            const colRef = doc(db, "notes", userId)
            const getCollection = getDoc(colRef)
                .then((snap) => {
                    setTasks(t => snap.data().todo)
                    setCompleted(c => snap.data().completed)
                    setProgress(p => snap.data().progress)
                })
                .catch((err) => {
                    console.log(err.message)
                })
        }

    }, [userId])


    const handleDragEnd = (result) => {

        const { source, destination } = result

        // Handle error if no destination or if source = destination
        if (!destination) return

        let currentSource;
        let currentSourceSet;
        let currentDestination;

        switch (source.droppableId) {
            case 'tasks':
                currentSource = [...tasks]
                currentSourceSet = setTasks
                break
            case 'progress':
                currentSource = [...progress]
                currentSourceSet = setProgress
                break
            case 'completed':
                currentSource = [...completed]
                currentSourceSet = setCompleted
                break
            default:
                return
        }

        switch (destination.droppableId) {
            case 'tasks':
                currentDestination = setTasks
                break
            case 'progress':
                currentDestination = setProgress
                break
            case 'completed':
                currentDestination = setCompleted
                break
            default:
                return
        }

        const [getItem] = currentSource.splice(source.index, 1)


        // If column is same, change order of array, else add to selected array
        if (source.droppableId === destination.droppableId) {

            currentSource.splice(destination.index, 0, getItem)
            currentSourceSet(currentSource)

        } else {

            currentDestination(d => [...d, getItem])
            currentSourceSet(currentSource)

        }

    }

    const handleClick = () => {
        if (userId === null) return;

        const colRef = doc(db, "notes", userId)

        setDoc(doc(db, "notes", userId), {
            todo: [...tasks],
            progress: [...progress],
            completed: [...completed]
        })
            .then(() => {
                console.log("synced data")
            })
            .catch((err) => {
                console.log(err.message)
            })

    }

    return (



        <div className="flex flex-wrap flex-col md:flex-row items-center justify-center gap-8 pt-8">

            {userId ? null : <div className="absolute bg-neutral-900/[0.7] z-10 left-0 top-8 bottom-12 w-screen h-[116rem] sm:h-screen">

                <p className="mt-[40vh] mb-4">Login or register to use boards</p>

                <Link to={"/"}
                    className="bg-gradient-to-r from-purple-600 to-pink-500 py-2 px-4 rounded-full">
                    Back to home
                </Link>

            </div>}

            <DragDropContext onDragEnd={handleDragEnd}>

                <Dropzone
                    title={"To-Do"}
                    data={tasks}
                    setData={setTasks}
                    id={"tasks"}
                />

                <Dropzone
                    title={"In progress"}
                    data={progress}
                    setData={setProgress}
                    id={"progress"}
                />

                <Dropzone
                    title={"Completed"}
                    data={completed}
                    setData={setCompleted}
                    id="completed"
                />

            </DragDropContext>

            <button onClick={handleClick}
                className="bg-gradient-to-r from-purple-600 to-pink-500 py-2 px-4 rounded-full">
                Sync
            </button>

        </div>
    );
}

export default Board;