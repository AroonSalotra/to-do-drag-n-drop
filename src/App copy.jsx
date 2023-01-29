import { useState } from 'react'
import './App.css'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import cardData from "./data/cards.json"

function App() {

  const [array, setArray] = useState(cardData);

  const handleDragEnd = (result) => {

    const { destination, source } = result;

    if (!destination) return

    const clone = [...array];

    const newData = clone.splice(source.index, 1);

    clone.splice(destination.index, 0, newData[0])

    setArray(clone)

    console.log(result)

  }


  return (
    <div className="App">

      <h1 className='title'>
        Drag and drop
      </h1>

      <DragDropContext onDragEnd={handleDragEnd}>

        <Droppable droppableId="myCards">

          {(provided) => (

            <ul className='card-list'
              {...provided.droppableProps}
              ref={provided.innerRef}>

              {array.map(({ title }, index) => {

                return <Draggable key={index}
                  draggableId={index.toString()}
                  index={index}>

                  {(provided) => (

                    <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>

                      {title}

                    </li>

                  )}

                </Draggable>

              })}

              {/* {provided.placeholder} */}

            </ul>

          )}

        </Droppable>

      </DragDropContext>

    </div>
  )
}

export default App
