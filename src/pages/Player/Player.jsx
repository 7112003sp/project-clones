import React, { useEffect, useState } from 'react'
import './Player.css'
import back_icon from '/Users/suryaprakash/Desktop/React_Projects/netflix/src/assets/back_arrow_icon.png'
import { Link, useParams } from 'react-router-dom'

const Player = () => {
  const id = useParams()
  const [api, setapi] = useState({
    "name": "",
    "key": "",
    "published_at": "",
    "type": ""
  })
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTZjYWJmOWE3MGI1NzRhMWYxZmUxNDFmM2Q5ZmQ1MCIsIm5iZiI6MTc1Nzc0NTA0NS40OTQwMDAyLCJzdWIiOiI2OGM1MGY5NWY1ZTZlMzY3ZGEzMjc2MjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.aMq0GIi_3t71oOSjkG3nHsraGfZh7gu40bMTa5mzH7M'
  }
};

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id.id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setapi(res.results[0]))
  .catch(err => console.error(err));
  },[id])
  console.log(api);
  
  return (
    <div className='player'>
      <Link to='/'><img src={back_icon}/></Link>
      <iframe width='90%' height='90%' src={`https://youtube.com/embed/${api.key}`}
      frameBorder={0} allowFullScreen title="trailer"/>
      <div className="player-info">
        <p>{api.published_at.slice(0,10)}</p>
        <p>{api.name.slice(0,24)}</p>
        <p>{api.type}</p>
      </div>
    </div>
  )
}

export default Player