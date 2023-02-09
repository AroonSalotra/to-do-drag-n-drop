import { useEffect, useState } from "react"
import { auth } from "../firebase-config"
import { onAuthStateChanged } from "firebase/auth"
import { AiFillGithub, AiFillLinkedin, AiFillContainer } from "react-icons/ai"

const Footer = () => {

    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const getLoggedInUser = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(cu => user.reloadUserInfo.email)
            } else {
                setCurrentUser(null)
            }
        })

        return getLoggedInUser
    }, [currentUser])

    return (
        <footer className="bg-neutral-900 sm:fixed bottom-0 left-0 w-screen pb-2 mt-20">

            {currentUser ? <p className="text-neutral-400">Logged in as:
                <span className="text-white"> {currentUser}</span>
            </p>
                : null}


            <ul className="flex sm:flex-row sm:gap-20 gap-8 justify-center pt-3">

                <li>
                    <a href="https://www.aroonsalotra.com/" target={"_blank"}>
                        <AiFillContainer className="text-4xl sm:text-2xl sm:hover:text-neutral-400" />
                    </a>
                </li>

                <li>
                    <a href="https://github.com/AroonSalotra" target={"_blank"}>
                        <AiFillGithub className="text-4xl sm:text-2xl sm:hover:text-neutral-400" />
                    </a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/aroon-salotra-0aa5b6209/" target={"_blank"}>
                        <AiFillLinkedin className="text-4xl sm:text-2xl sm:hover:text-neutral-400" />
                    </a>
                </li>

            </ul>

        </footer>
    );
}

export default Footer;