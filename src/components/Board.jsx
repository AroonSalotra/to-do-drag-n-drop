import { useEffect, useState } from "react"
import Dropzone from "./Dropzone"
import { DragDropContext } from 'react-beautiful-dnd'
import { db } from "../firebase-config"
import {
    getDoc,
    doc,
    setDoc
} from "firebase/firestore/lite"
import { useNavigate } from "react-router-dom"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import Modal from "./Modal"

const Board = ({ userId }) => {

    const [completed, setCompleted] = useState([])
    const [progress, setProgress] = useState([])
    const [tasks, setTasks] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

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

    useEffect(() => {
        if (isLoading !== true) return

        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1000)

        return () => clearTimeout(timer)

    }, [isLoading])

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
                setIsLoading(true)
            })
            .catch((err) => {
                console.log(err.message)
            })

    }

    return (

        <div className="flex flex-wrap flex-col md:flex-row items-center justify-center gap-8 pt-8 animate-fade">

            {/* Show modal if user is not logged in */}
            {userId ? null : <Modal />}

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
                className="bg-gradient-to-r from-purple-600 to-pink-500 py-2 px-4 rounded-full active:scale-105">
                Sync
            </button>
            {isLoading ? <AiOutlineLoading3Quarters className="animate-spin text-2xl" /> : null}



        </div>
    );
}

export default Board;