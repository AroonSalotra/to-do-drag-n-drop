import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Board from './components/Board'
import RegisterForm from './components/RegisterForm'
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useEffect, useState } from 'react'
import { auth } from "./firebase-config"

function App() {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const getLoggedInUser = onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user.reloadUserInfo)
        setCurrentUser(cu => user.reloadUserInfo.email)
      } else {
        setCurrentUser(null)
      }
    })
  }, [])

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        console.log("user signed out")
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return (
    <>

      <BrowserRouter>

        {currentUser ? <div className='flex justify-center gap-2'>
          <h2>{currentUser}</h2>
          <button className='lowercase' onClick={handleLogOut}>
            Sign Out</button>
        </div>
          : null}

        <Routes>

          <Route path='/' element={<RegisterForm />} />

          <Route path='/board' element={<Board />} />

        </Routes>

      </BrowserRouter>
    </>

  )
}

export default App