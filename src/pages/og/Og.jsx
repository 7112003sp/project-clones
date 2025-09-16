import React, { useEffect, useState } from 'react'
import './og.css'
import back_icon from '/Users/suryaprakash/Desktop/React_Projects/netflix/src/assets/back_arrow_icon.png'
import { Link, useParams } from 'react-router-dom'

const Player = () => {
  const id = useParams()
  return (
    <div className='player'>
      <Link to='/'><img src={back_icon}/></Link>
      <iframe width='90%' height='90%' src={`https://youtube.com/embed/7Y5q41D8_hs`}
      frameBorder={0} allowFullScreen title="trailer"/>
    </div>
  )
}

export default Player