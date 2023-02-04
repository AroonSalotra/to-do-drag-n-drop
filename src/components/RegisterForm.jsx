import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase-config";
import { getDocs, collection, addDoc, setDoc, doc } from "firebase/firestore/lite"
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth"

const RegisterForm = () => {

    const [inputEmail, setInputEmail] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    const [showError, setShowError] = useState(null)
    const navigate = useNavigate()


    const handleRegister = (e) => {
        e.preventDefault()
        const email = inputEmail
        const password = inputPassword

        createUserWithEmailAndPassword(auth, inputEmail, inputPassword)
            .then((cred) => {
                setInputEmail(email => "")
                setInputPassword(password => "")
                setDoc(doc(db, "notes", cred.user.uid), {
                });
                navigate("/board")
            })
            .catch((error) => {
                console.log(error.code + error.message)
                setShowError(e => error.message)
            })
    }

    const handleClick = () => {
        const colRef = collection(db, "notes")

        setDoc(doc(db, "notes", "LA"), {
            name: "Los Angeles",
            state: "CA",
            country: "USA"
        });

    }

    const handleLogIn = () => {
        signInWithEmailAndPassword(auth, inputEmail, inputPassword)
            .then(() => {
                setInputEmail(email => "")
                setInputPassword(password => "")
                navigate("/board")

            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    return (
        <>
            <form action=""
                onSubmit={(e) => e.preventDefault()}
                className="bg-neutral-700 flex justify-center items-center mt-[30vh] h-80">

                <fieldset className="flex flex-col gap-2 w-80">

                    <label htmlFor=""
                        className="flex flex-col">
                        Email

                        <input type="email"
                            name=""
                            id=""
                            className="p-1 px-2"
                            value={inputEmail}
                            onChange={(e) => setInputEmail(e.target.value)}
                        />

                    </label>

                    <label htmlFor=""
                        className="flex flex-col">
                        Password

                        <input type="password"
                            name=""
                            id=""
                            className="p-1 px-2"
                            value={inputPassword}
                            onChange={(e) => setInputPassword(e.target.value)}
                        />

                    </label>

                    {showError ? <p className="">
                        {showError}
                    </p>
                        : null}

                    {/* test123 */}
                    <button className="uppercase bg-neutral-600"
                        onClick={handleLogIn}>
                        Log in
                    </button>

                    <button className="uppercase bg-neutral-600"
                        onClick={handleRegister}>
                        Register
                    </button>

                    <button className="uppercase bg-neutral-600"
                        onClick={handleClick}>
                        Debug
                    </button>

                </fieldset>

            </form>
        </>
    );
}

export default RegisterForm;