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
        <header>
            <h2 className="cursor-pointer border-x-2 border-gra w-fit p-2 absolute right-0 top-0"
                onClick={handleLogOut}>
                {/* {currentUser} */}
                Sign out
            </h2>
        </header>
    );
}

export default Header;