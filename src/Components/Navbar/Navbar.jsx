import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '/Users/suryaprakash/Desktop/React_Projects/netflix/src/assets/logo.png'
import search from '/Users/suryaprakash/Desktop/React_Projects/netflix/src/assets/search_icon.svg'
import bell from '/Users/suryaprakash/Desktop/React_Projects/netflix/src/assets/bell_icon.svg'
import profile from '/Users/suryaprakash/Desktop/React_Projects/netflix/src/assets/profile_img.png'
import caret from '/Users/suryaprakash/Desktop/React_Projects/netflix/src/assets/caret_icon.svg'

import { logout } from '../../auth'

const Navbar = () => {
  const navref = useRef()
  useEffect(() => {
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 80){
        navref.current.classList.add('nav-dark')
      } else{
         navref.current.classList.remove('nav-dark')
      }
    })
  
  }, [])
  
  return (
    <div ref={navref} className='navbar'>
      <div className="nav-left">
        <img src={logo} alt='logo'/>
        <ul>
          <li>Home</li>
           <li>TV shows</li>
            <li>Movies</li>
             <li>New & Popular</li>
              <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="nav-right">
        <img src={search} alt='search' className='icon'/>
        <p>Children</p>
        <img src={bell} alt='search' className='icon'/>
        <div className="nav-prof">
        <img src={profile} alt='search' className='profile'/>
        <img src={caret} alt='search' className=''/>
        <div className="drop-down">
          <p onClick={()=>{logout()}}>Sign out of netflix</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar