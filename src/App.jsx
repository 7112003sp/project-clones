import React, { useEffect } from 'react'
import Home from './pages/home/Home'
import {  Route, Routes, useNavigate } from 'react-router-dom'
import Login from './pages/Login.jsx/Login'
import Player from './pages/Player/Player'
import Og from '/Users/suryaprakash/Desktop/React_Projects/netflix/src/pages/og/Og.jsx'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './auth'
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
   const navigate = useNavigate()
  
  useEffect(()=>{ 

    onAuthStateChanged(auth,async(user)=>{
      if(user){
        console.log("Logged in"); 
        navigate('/')
      } else {
        navigate('/login')
      }
    })
  },[])

  
  return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='login' element={<Login/>}/>
     <Route path='/player/:id' element={<Player/>}/>
     <Route path='/og' element={<Og/>}/>
      </Routes>
    </div>
  )
}

export default App