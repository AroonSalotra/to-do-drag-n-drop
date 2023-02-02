import { useState } from "react"
import Dropzone from "./Dropzone"
import { DragDropContext } from 'react-beautiful-dnd'

const Board = () => {

    const [completed, setCompleted] = useState([])
    const [progress, setProgress] = useState([])
    const [tasks, setTasks] = useState([
        "Add date tag",
        "Add support section",
        "Add mobile functionality"
    ])

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
    return (
        <div className="flex flex-wrap flex-col sm:flex-row items-center justify-center gap-8 pt-8">
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
        </div>
    );
}

export default Board;