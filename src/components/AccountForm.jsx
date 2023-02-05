import { useState } from "react";
import { setDoc, doc } from "firebase/firestore/lite";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const AccountForm = ({ formType, setShowBtns, setFormDisplay }) => {

    const [emailInput, setEmailInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const navigate = useNavigate()

    const handleRegister = () => {

        createUserWithEmailAndPassword(auth, emailInput, passwordInput)
            .then((cred) => {
                setEmailInput(email => "")
                setPasswordInput(password => "")
                setDoc(doc(db, "notes", cred.user.uid), {
                    todo: ["Add a note to get started"],
                    completed: [],
                    progress: []
                })
                    .then(() => {
                        navigate("/board")
                    });
            })
            .catch((error) => {
                console.log(error.code + error.message)
                setShowError(e => error.message)
            })
    }

    const handleLogIn = () => {
        signInWithEmailAndPassword(auth, emailInput, passwordInput)
            .then((cred) => {
                setEmailInput(email => "")
                setPasswordInput(password => "")
                // console.log(cred.user.uid)
                // setUserId(id => cred.user.uid)

            })
            .then(() => {
                navigate("/board")
            })
            .catch((err) => {
                console.log(err.message)
            })
    }


    return (
        <>
            <fieldset className="flex flex-col gap-2 mt-[10vh] w-full m-auto sm:w-96">

                <input type="email"
                    name="useremail"
                    id="useremail"
                    placeholder="Your email"
                    className="px-2 py-1"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                />

                <input type="password"
                    name="userpassword"
                    id="userpassword"
                    placeholder="Your password"
                    className="px-2 py-1"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                />



                {formType === "Register" ?
                    <button onClick={handleRegister}>
                        {formType ? formType : "add a formType prop"}
                    </button>
                    :
                    <button onClick={handleLogIn}>
                        {formType ? formType : "add a formType prop"}
                    </button>}

                <button onClick={() => { setShowBtns(true); setFormDisplay(false) }}>Back</button>

            </fieldset>
        </>

    );
}

export default AccountForm;