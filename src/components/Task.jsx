import { useEffect, useState } from "react";
import { AiFillDelete, AiFillBook } from "react-icons/ai"
import { BiDotsVertical } from "react-icons/bi"

const Task = ({ body, index, data, setData }) => {

    const [isMenuActive, setIsMenuActive] = useState(false)

    useEffect(() => {

        if (isMenuActive === false) return;

        const handleEvent = (e) => {
            e.target.type !== "submit" ?
                setIsMenuActive(false) : null
        }

        window.addEventListener("click", handleEvent)

        return () => window.removeEventListener("click", handleEvent)

    }, [isMenuActive])

    const handleClick = () => {
        const dataClone = [...data]
        const [getItem] = dataClone.splice(index, 1)

        setData(d => dataClone)
    }

    return (
        <>
            <div className="p-2 shadow-sm shadow-gray-900 grid grid-cols-8">

                <p className={`break-all overflow-y-auto ${isMenuActive ? "col-span-5" : "col-span-8"}`}>
                    {body}</p>

                {isMenuActive ?
                    <>
                        <button className="col-start-7 row-start-1 pl-4"
                            onClick={handleClick}>
                            <AiFillDelete className="text-2xl" />
                        </button>

                        <button className="col-start-6 pl-4">
                            <AiFillBook className="text-2xl" />
                        </button>
                    </>
                    :
                    null}

                <button className="text-sm uppercase col-start-8 pl-4"
                    type="task"
                    onClick={() => setIsMenuActive(m => !isMenuActive)}>
                    <BiDotsVertical className={`text-3xl select-none pointer-events-none transition-all ${isMenuActive ? "rotate-90" : ""}`} />
                </button>

            </div>
        </>
    );
}

export default Task;