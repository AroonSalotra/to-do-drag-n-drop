import { useEffect } from "react"
import { useState, useRef } from "react"
import { BsThreeDots, BsPlusLg } from "react-icons/bs"

const Options = ({ setData }) => {

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
        if (textInput.length > 1) {
            setData(d => [...d, textInput])
            setTextInput("")
        }
    }

    return (
        <>
            <form action=""
                className=""
                onSubmit={handleFormSubmit}>

                <input className={`${isInputActive ? "" : "hide"} absolute -translate-x-[22.1rem] translate-y-12 w-96 px-4 p-2`}
                    value={textInput}
                    onChange={handleTextChange}
                    type="text"
                    ref={textRef}
                />

                <button
                    onClick={handleButtonClick}>

                    <BsPlusLg
                        className={`${isInputActive ? "rotate-45" : "rotate-0"} text-3xl transition-all`} />

                </button>


            </form>
        </>
    );
}

export default Options;