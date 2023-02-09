import { useEffect } from "react"
import { useState, useRef } from "react"
import { BsPlusLg } from "react-icons/bs"

const AddTask = ({ setData }) => {

    const [isInputActive, setIsInputActive] = useState(false)
    const [textInput, setTextInput] = useState("")
    const textRef = useRef(null)

    const handleButtonClick = () => setIsInputActive(!isInputActive)

    const handleTextChange = (e) => setTextInput(e.target.value)

    useEffect(() => {
        if (isInputActive) return textRef.current.focus()
    }, [isInputActive])

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if (textInput.length < 1) return

        const getLetter = textInput.slice(0, 1).toUpperCase()
        const result = getLetter + textInput.slice(1, textInput.length)
        console.log(result)

        setData(d => [...d, result])
        setTextInput("")

    }

    return (
        <>
            <form action=""
                className=""
                onSubmit={handleFormSubmit}>

                <input className={`${isInputActive ? "" : "hide"} absolute sm:-translate-x-[22.1rem] translate-y-12 left-0 sm:left-auto w-full sm:w-96 px-4 p-2`}
                    value={textInput}
                    onChange={handleTextChange}
                    type="text"
                    ref={textRef}
                />

                <button onClick={handleButtonClick}>

                    <BsPlusLg className={`${isInputActive ? "rotate-45" : "rotate-0"} text-3xl transition-all`} />

                </button>

            </form>
        </>
    );
}

export default AddTask;