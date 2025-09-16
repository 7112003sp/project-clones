import React, { useState,useEffect, useRef } from 'react'
import './Titlecard.css'
import card_dara from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

const Titlecard = ({title,category}) => {
  const cardref = useRef(null)
  const [apidata, setapidata] = useState([])
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTZjYWJmOWE3MGI1NzRhMWYxZmUxNDFmM2Q5ZmQ1MCIsIm5iZiI6MTc1Nzc0NTA0NS40OTQwMDAyLCJzdWIiOiI2OGM1MGY5NWY1ZTZlMzY3ZGEzMjc2MjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.aMq0GIi_3t71oOSjkG3nHsraGfZh7gu40bMTa5mzH7M'
  }
};
  const handleWheel = (event) => {
    event.preventDefault()
    cardref.current.scrollLeft += event.deltaY
    console.log(cardref.current.scrollLeft);
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setapidata(res.results))
  .catch(err => console.error(err));
    const el = cardref.current
    if (!el) return

  
    el.addEventListener('wheel', handleWheel, { passive: false })

    return () => el.removeEventListener('wheel', handleWheel)
  }, [])

  return (
    <div className='tile'>
      <h2>{title ? title :"Popular on Netflix"}</h2>
      <div className="card_list" ref={cardref}>
        {apidata.map((card, key) => (
          <Link to={`/player/${card.id}`}className="card" key={key}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt='' />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Titlecard
