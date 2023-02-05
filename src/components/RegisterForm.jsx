import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, db } from "../firebase-config";
import { getDocs, collection, addDoc, setDoc, doc } from "firebase/firestore/lite"
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth"
import AccountForm from "./AccountForm";

const RegisterForm = ({ userId, setUserId }) => {

    const [isLoginForm, setIsLoginForm] = useState(false)
    const [isRegisterForm, setIsRegisterForm] = useState(false)
    const [showBtns, setShowBtns] = useState(true)


    return (
        <>
            <form action=""
                onSubmit={(e) => e.preventDefault()}
                className="bg-neutral-700 flex justify-center items-center mt-[30vh] h-80">

                {userId ? <>
                    <Link to={"/board"}
                        className="border-2 border-neutral-800 p-3 hover:bg-gray-500">
                        Board
                    </Link>
                </>
                    :
                    <>
                        {showBtns ? <fieldset className="flex items-center">

                            <button className="border-2 border-neutral-800 p-3 hover:bg-gray-500"
                                onClick={() => { setIsRegisterForm(true); setShowBtns(false) }} >
                                Register
                            </button>

                            <hr className="text-white w-32 rotate-90" />

                            <button className="border-2 border-neutral-800 p-3 hover:bg-gray-500"
                                onClick={() => { setIsLoginForm(true); setShowBtns(false) }}>
                                Log in
                            </button>

                        </fieldset> : null}

                        {isLoginForm ?

                            <AccountForm formType={"Log in"}
                                setShowBtns={setShowBtns}
                                setFormDisplay={setIsLoginForm} /> : null}

                        {isRegisterForm ?

                            <AccountForm formType={"Register"}
                                setShowBtns={setShowBtns}
                                setFormDisplay={setIsRegisterForm} /> : null}
                    </>
                }



            </form>
        </>
    );
}

export default RegisterForm;