import React , {useEffect} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from '../feature/authSlice'

const Layout = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isError,user} = useSelector((state => state.auth));

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
        // if(isError){
        //     navigate("/Login")
        // }
        // if (user && user.role !== "admin"){
        //   navigate("/")
        // }
    }, [isError, user, navigate]);
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout