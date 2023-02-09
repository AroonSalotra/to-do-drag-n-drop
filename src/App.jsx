import './App.css'
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Board from './components/Board'
import RegisterForm from './components/RegisterForm'
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase-config"
import Header from './components/Header'
import ViewBoard from './components/ViewBoard'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Subscription from './components/Subscription'


function App() {

  const [userId, setUserId] = useState(null)

  useEffect(() => {

    const getLoggedInUser = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(cu => user.uid)
        console.log(`current userId: ${user.uid}`)
      } else {
        setUserId(null)
      }
    })

  }, [userId])

  return (
    <>

      <BrowserRouter>

        <Navbar />

        <Header />

        <Routes>

          <Route path='/' element={<RegisterForm userId={userId} setUserId={setUserId} />} />

          <Route path='/board' element={<Board userId={userId} setUserId={setUserId} />} />

          <Route path='/view-boards' element={<ViewBoard />} />

          <Route path='/pro' element={<Subscription />} />

        </Routes>

        <Footer />

      </BrowserRouter>

    </>

  )
}

export default App