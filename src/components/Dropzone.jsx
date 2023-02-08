import { Droppable, Draggable } from "react-beautiful-dnd";
import AddTask from "./AddTask";
import Task from "./Task";

const Dropzone = ({ title, data, setData, id, dragIndex }) => {

    return (
        <>
            <Droppable droppableId={id}>

                {(provided) => (

                    <div
                        {...provided.droppableProps} ref={provided.innerRef} >

                        <div className="flex justify-between items-center">

                            <h2 className="uppercase font-bold text-2xl bg-neutral-700 p-4">
                                {title ? title : "TITLE"}
                            </h2>

                            <AddTask setData={setData} />

                        </div>

                        <div className="pt-8 bg-neutral-600 w-screen sm:w-96 h-[30rem] overflow-auto max-h-fit pb-4 border-b-2 border-gra">

                            {data ? <ul className="flex flex-col items-center gap-4">

                                {data.map((item, index) => {
                                    return <Draggable key={`${id} ${index}`}
                                        draggableId={id + index.toString()}
                                        index={index}>

                                        {(provided) => (

                                            <li className="w-screen sm:w-80 pointer bg-neutral-700 text-left"
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                ref={provided.innerRef}>

                                                <Task
                                                    body={item}
                                                    index={index}
                                                    data={data}
                                                    setData={setData}
                                                />

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

        </>

    );
}

export default Dropzone;