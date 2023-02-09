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

            {currentUser ? <p>Logged in as: {currentUser}</p>
                : null}

            <div className="flex flex-col sm:flex-row items-center justify-between pt-4 pl-8">

                <ul className="flex sm:flex-row sm:gap-20">

                    <li>
                        <a href="https://www.aroonsalotra.com/" target={"_blank"}>
                            <AiFillContainer className="text-2xl" />
                        </a>
                    </li>

                    <li>
                        <a href="https://github.com/AroonSalotra" target={"_blank"}>
                            <AiFillGithub className="text-2xl" />
                        </a>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/in/aroon-salotra-0aa5b6209/" target={"_blank"}>
                            <AiFillLinkedin className="text-2xl" />
                        </a>
                    </li>

                </ul>

                <small className="italic">This is a mock website for demonstrating my programming ability</small>

            </div>
        </footer>
    );
}

export default Footer;