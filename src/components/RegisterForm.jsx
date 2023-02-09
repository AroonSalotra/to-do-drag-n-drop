import { useState } from "react";
import AccountForm from "./AccountForm";
import ViewBoard from "./ViewBoard";

const RegisterForm = ({ userId }) => {

    const [isLoginForm, setIsLoginForm] = useState(false)
    const [isRegisterForm, setIsRegisterForm] = useState(false)
    const [showBtns, setShowBtns] = useState(true)

    return (
        <form action=""
            onSubmit={(e) => e.preventDefault()}
            id="login-form"
            className="bg-neutral-70 flex justify-center items-center my-8 sm:mt-[30vh]">

            {userId ? <ViewBoard />
                :
                <>
                    {showBtns ? <fieldset className="flex flex-col gap-4 sm:gap-0 sm:flex-row items-center">

                        <button className="p-3 w-22 font-semibold bg-gradient-to-r from-purple-600 to-pink-500 hover:-translate-y-1 transition-transform"
                            onClick={() => { setIsRegisterForm(true); setShowBtns(false) }} >
                            Register
                        </button>

                        <hr className="w-32 sm:rotate-90" />

                        <button className="p-3 w-24 border-2 font-semibold hover:-translate-y-1 transition-transform border-gra"
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
    );
}

export default RegisterForm;