import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai"
import { BiDotsVertical } from "react-icons/bi"
import { ImCross } from "react-icons/im"

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
        // const [getItem] = currentSource.splice(source.index, 1)
        const dataClone = [...data]

        const [getItem] = dataClone.splice(index, 1)
        setData(d => dataClone)
        // console.log(dataClone)
    }

    return (
        <>
            <div className={`p-2 flex justify-between shadow-sm shadow-gray-900`}>

                <p className="max-h-24 overflow-auto">{body}</p>

                {isMenuActive ?
                    <>
                        <button onClick={handleClick}>
                            <AiFillDelete className="text-2xl" />
                        </button>
                    </>
                    :
                    null}

                <button className="text-sm uppercase"
                    type="task"
                    onClick={() => setIsMenuActive(m => !isMenuActive)}>
                    <BiDotsVertical className="text-3xl select-none pointer-events-none" />
                </button>

            </div>
        </>
    );
}

export default Task;