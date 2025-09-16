import React, { useState } from 'react'
import './login.css'
import logo from '/Users/suryaprakash/Desktop/React_Projects/netflix/src/assets/logo.png'
import { Link } from 'react-router-dom'
import { login,signUp } from '../../auth'
import spin from '/Users/suryaprakash/Desktop/React_Projects/netflix/src/assets/netflix_spinner.gif'

const Login = () => {
  const [signstate, setsignstate] = useState("Sign In")
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [loading, setloading] = useState(false)
  console.log(name,email,password);
  
  const user_auth = async(e)=>{
    setloading(true)
    e.preventDefault()
    if(signstate === "Sign In"){
      await login(email,password)
    }
    else{
      await signUp(name,email,password)
    }
    setloading(false)
  }
  return (
    loading?<div className="spin"><img src={spin} alt=''/></div>
    :
    <div className='login'>
        <img src={logo} alt="" />
        <div className="login-form">
          
          <h1>{signstate}</h1>
          
          <form>
            
            {signstate === "Sign Up"?<input onChange={(e) => {setname(e.target.value)}}  type='text' placeholder='Your Name'  value={name} className='inp'/>: <></>}
             <input  type='email' value={email} onChange={(e) => {setemail(e.target.value)}} placeholder='Email' className='inp'/>
              <input type='password' value={password} onChange={(e) => {setpassword(e.target.value)}} placeholder='Password' className='inp'/>
              <Link to="/"><button className='btn-1' onClick={user_auth} type='submit'>{signstate === "Sign in" ? <>{signstate}</> : <>{signstate}</>}</button></Link>
              <div className="form-help">
                <div className="rember">
                  <input type='checkbox'/>
                <label className='lbl' htmlFor=''>Remember Me</label></div>
                <p>Help Me</p>
              </div>
          </form>
          <div className="form-switch">
            {signstate =="Sign In" ?
            <p>New to Netflix? <span onClick={()=>{
              setsignstate("Sign Up")
            }}>Sing Up Now</span></p> :
            <p>Already have account? <span onClick={()=>{
              setsignstate("Sign In")
            }}>Sing in Now</span></p>}
          </div>
        </div>
    </div>
  )
}

export default Login