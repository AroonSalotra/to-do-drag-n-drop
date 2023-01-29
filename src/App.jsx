import { useState } from 'react'
import './App.css'
import Dropzone from './components/Dropzone'
import { DragDropContext } from 'react-beautiful-dnd'

function App() {

  const [completed, setCompleted] = useState([])
  const [progress, setProgress] = useState([])
  const [tasks, setTasks] = useState([
    "Finish footer",
    "Add support section",
    "Add mobile functionality"
  ])

  const handleListChange = (result) => {

    const { source, destination } = result

    if (!destination) return

    let thisSource;
    let thisSourceSet;
    let thisDestination;

    switch (source.droppableId) {
      case 'tasks':
        thisSource = [...tasks]
        thisSourceSet = setTasks
        break
      case 'progress':
        thisSource = [...progress]
        thisSourceSet = setProgress
        break
      case 'completed':
        thisSource = [...completed]
        thisSourceSet = setCompleted
        break
      default:
        return
    }

    switch (destination.droppableId) {
      case 'tasks':
        thisDestination = setTasks
        break
      case 'progress':
        thisDestination = setProgress
        break
      case 'completed':
        thisDestination = setCompleted
        break
      default:
        return
    }

    const [getItem] = thisSource.splice(source.index, 1)

    thisDestination(d => [...d, getItem])

    thisSourceSet(thisSource)

  }

  const handleDragEnd = (result) => handleListChange(result)




  return (
    <>

      <div className="App">

        <DragDropContext onDragEnd={handleDragEnd}>

          <Dropzone
            title={"Tasks"}
            data={tasks}
            id={"tasks"}
            dragIndex={1}
          />

          <Dropzone
            title={"In progress"}
            data={progress}
            id={"progress"}
            dragIndex={21}
          />

          <Dropzone
            title={"Completed"}
            data={completed}
            id="completed"
            dragIndex={41}
          />

        </DragDropContext>

      </div>

    </>


  )
}

export default App
