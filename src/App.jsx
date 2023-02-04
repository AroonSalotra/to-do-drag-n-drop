import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Board from './components/Board'
import RegisterForm from './components/RegisterForm'
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useEffect, useState } from 'react'
import { auth, db } from "./firebase-config"
import { useNavigate } from "react-router-dom";
import Header from './components/Header'


function App() {

  return (
    <>

      <BrowserRouter>

        <Header />

        <Routes>

          <Route path='/' element={<RegisterForm />} />

          <Route path='/board' element={<Board />} />

        </Routes>

      </BrowserRouter>

    </>

  )
}

export default App