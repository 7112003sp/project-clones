import React from 'react'
import Login from '../pages/Login.jsx/Login'
import { Outlet } from 'react-router-dom'

const Loginlayout = () => {
  return (
    <div>
        <Login/>
        <Outlet/>
    </div>
  )
}

export default Loginlayout