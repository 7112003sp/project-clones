import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import hero_banner from '/Users/suryaprakash/Desktop/React_Projects/netflix/public/og.jpg'
import hero_title from '../../assets/hero_title.png'
import hero_play from '../../assets/Play_icon.png'
import hero_info from '../../assets/info_icon.png'
import Titlecard from '../../Components/Titlecard.jsx/Titlecard'
import Footer from '../../Components/Footer/Footer'
import { useNavigate } from 'react-router-dom'


const Home = () => {
 const navigate = useNavigate()
  return (
    <div className='home'>
        <Navbar/>
        <div className="hero-section">
          <img src={hero_banner} alt='' className='bg-image'/>
          <div className="hero-caption">
            <img src={hero_title} alt='' className='cap-img'/>
            <p>After vanishing from Mumbai's underworld for a decade, mob boss Ojas Gambheera resurfaces seeking vengeance against rival crime lords.</p>
            <div className="her-btn">
             <button className='btn'> <img src={hero_play} alt=''/>Play</button>
             <button className='btn dark-btn' > <img src={hero_info} alt=''/>More Info</button>
            </div>
                         <Titlecard/>
          </div>
        </div>
        <div className="more-cards">
          <Titlecard title={"BlockBuster Movies"} category={"top_rated"}/>
           <Titlecard title={"Only on Netflix"} category={"popular"}/>
            <Titlecard title={"Upcoming"} category={"upcoming"}/>
             <Titlecard title={"Top Picks For You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home