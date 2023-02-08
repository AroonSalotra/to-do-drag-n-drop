import { useEffect, useState } from "react"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../firebase-config"
import { useNavigate } from "react-router-dom"

const Header = () => {

    const [currentUser, setCurrentUser] = useState(null)
    const navigate = useNavigate()

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

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                console.log("user signed out")
                navigate("/")
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    return (
        <header className="mb-20">

            {currentUser ? <h2 className="cursor-pointer bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg p-1 w-fit absolute right-5 top-2 sm:top-8 text-lg"
                onClick={handleLogOut}>
                Sign out
            </h2>
                : null}

        </header>
    );
}

export default Header;