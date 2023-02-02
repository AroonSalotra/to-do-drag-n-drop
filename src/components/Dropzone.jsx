import { Droppable, Draggable } from "react-beautiful-dnd";
import Options from "./Options";
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

                            <Options setData={setData} />

                        </div>

                        <div className="pt-8 bg-neutral-600 w-96 min-h-[30rem] max-h-fit">

                            {data ? <ul className="flex flex-col items-center gap-4">

                                {data.map((item, index) => {
                                    return <Draggable key={`${id} ${index}`}
                                        draggableId={id + index.toString()}
                                        index={index}>

                                        {(provided) => (

                                            <li className="w-80 pointer bg-neutral-700 text-left"
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                ref={provided.innerRef}>

                                                <Task body={item} />

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