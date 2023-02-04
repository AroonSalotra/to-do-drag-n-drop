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
            <h1 className="cursor-pointer"
                onClick={handleLogOut}>
                {currentUser}
            </h1>
        </header>
    );
}

export default Header;