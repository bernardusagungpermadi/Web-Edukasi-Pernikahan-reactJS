
import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {LoginUser, reset} from "../feature/authSlice";
import { Link } from 'react-router-dom';
import loginLogo from '../asset/mlogo.png';
import loginImg from '../asset/loginimg.png';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user, isError, isSucces, isLoading, message} = useSelector(
      (state) => state.auth
      );

    useEffect(()=>{
      if(user || isSucces){
        navigate("/Dashboard/Overview");
      }
      if (user && user.role !== "admin"){
        navigate("/")
      }
      dispatch(reset());
    },[user, isSucces, dispatch, navigate ]);

    const Auth = (e) => {
      e.preventDefault();
      dispatch(LoginUser({email, password}));
    }
  return (
    <div className="login__container">
        <div className='login__left'>
          <div className="aunt">
            <div className="login__logo">
            <img src={loginLogo} alt="" />
            <h5>Happy Familly</h5>
            </div>

            <h4>Welcome Back!</h4>
            
            <form onSubmit={Auth}>
              {isError && <p className='has-text-centered'>{message}</p>}
              <label htmlFor="">Email</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} 
                placeholder='youremail@gmail.com' 
                id='' 
                name='email' />
              <label htmlFor="">Password</label>

              <input 
                type="password" 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)} 
                placeholder='********' 
                name='password' />
              <div>
                <button type='submit' className='btn-login-register'>
                  {isLoading ? 'Loading...' : "Login"}
                  </button>
              </div>
              
            </form>
            <div className='register'>
              <span>Don't Have an account?</span> <Link to="/Register">Register Here</Link>
            </div>
          </div>
        </div>

        <div className="login__right">
          <img src={loginImg} alt="" />
        </div>
    </div>
  )
}

export default Login