import { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai"

const Task = ({ body }) => {

    const [isTagVisible, setIsTagVisible] = useState(false)
    const [customBg, setCustomBg] = useState("bg-neutral-700")

    return (
        <>
            <div className={`${customBg} p-2 py-4`}>

                {isTagVisible ? <p className="text-sm bg-neutral-600 w-fit p-1 px-2">
                    Urgent
                </p>
                    : null}

                <p className="max-h-24 overflow-auto">{body}</p>


                <button onClick={() => setIsTagVisible(!isTagVisible)}
                    className="text-sm uppercase">
                    <AiOutlineInfoCircle className="text-lg" />
                </button>

            </div>
        </>
    );
}

export default Task;