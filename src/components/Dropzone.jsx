import { Droppable, Draggable, DragDropContext } from "react-beautiful-dnd";
import { useState, useId } from "react";
import { BsThreeDots } from "react-icons/bs"

const Dropzone = ({ title, data, id, dragIndex }) => {


    const randomId = useId()
    // const [listData, setListData] = useState(data)

    const logData = () => {
        console.log(data)
    }

    let thisIndex = dragIndex


    return (
        <>
            {/* <DragDropContext onDragEnd={handleDragEnd}> */}

            <div style={{

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "5px"

            }}>


                <Droppable droppableId={id}>

                    {(provided) => (

                        <div className="dropzone"
                            {...provided.droppableProps} ref={provided.innerRef} >

                            <div>
                                <h2 className="uppercase font-bold text-2xl bg-neutral-700 p-4">
                                    {title ? title : "TITLE"}
                                </h2>

                                <button type="button">
                                    <BsThreeDots style={{
                                        fontSize: "2rem"
                                    }} />
                                </button>
                            </div>

                            <div className="pt-8 bg-neutral-600 w-96 min-h-[30rem] max-h-fit">

                                {data ? <ul className="card-list">

                                    {data.map((item, index) => {
                                        return <Draggable key={`${id} ${index}`}
                                            draggableId={id + index.toString()}
                                            index={index}>

                                            {(provided) => (

                                                <li
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    ref={provided.innerRef}>

                                                    {item}

                                                </li>
                                            )}

                                        </Draggable>

                                    })}

                                    {provided.placeholder}

                                </ul> : null}

                            </div>

                        </div>

                    )}

                </Droppable>

                {/* </DragDropContext> */}

                <button style={{
                    width: "12rem",
                    height: "3rem",
                    cursor: "pointer"
                }}
                    onClick={logData}>
                    LOG DATA
                </button>

            </div>

        </>

    );
}

export default Dropzone;