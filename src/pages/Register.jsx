
import React from 'react'
import RegisterLogo from '../asset/mlogo.png'
import RegisterImg from '../asset/loginimg.png'
import { Link } from 'react-router-dom'


const Register = () => {
  return (
    <div className="login__container">
        <div className='login__left'>
          <div className="aunt">
            <div className="login__logo">
            <img src={RegisterLogo} alt="" />
            <h5>Happy Familly</h5>
            </div>

            <h4>Register Now!</h4>
            
            <form>
              <label htmlFor="">Name</label>
              <input type="text" placeholder='username' id='' name='name' />
              <label htmlFor="">Email</label>
              <input type="email" placeholder='youremail@gmail.com' id='' name='email' />
              <label htmlFor="">Password</label>
              <input type="password" placeholder='********' name='password' />
              <Link to="/Login"><button className='btn-login-register'>Register</button></Link>
            </form>
            <div className='register'>
              <span>Do You Have an account?</span> <Link to="/Login">Login Here</Link>
            </div>
          </div>
        </div>

        <div className="login__right">
          <img src={RegisterImg} alt="" />
        </div>
    </div>
  )
}

export default Register