import React from 'react'
import './Footer.css'
import utube_icon from '../../assets/youtube_icon.png'
import fb_icon from '../../assets/facebook_icon.png'
import insta_icon from '../../assets/instagram_icon.png'
import x_icon from '../../assets/twitter_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={utube_icon} alt=''/>
        <img src={fb_icon} alt=''/>
        <img src={insta_icon} alt=''/>
        <img src={x_icon} alt=''/>
      </div>
      <ul>
        <li>Audio Description</li>
<li>Help Centre</li>
<li>Gift Cards</li>
<li>Media Centre</li>
<li>Investor Relations</li>
<li>Jobs</li>
<li>Terms of Use</li>
<li>Privacy</li>
<li>Legal Notices</li>
<li>Cookie Preferences</li>
<li>Corporate Information</li>
<li>Contact Us</li>
      </ul>
      <p>@2025 All Right Reserved</p>
    </div>
  )
}

export default Footer