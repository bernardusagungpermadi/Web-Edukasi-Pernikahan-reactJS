import React, {useEffect} from 'react';
import TopNav from '../components/Dashboard-Admin/TopNav';
import Sidebar from '../components/Dashboard-Admin/Sidebar';
import '../App.css';


import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { getMe } from '../feature/authSlice';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';

function Dashboard() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isError,user} = useSelector((state => state.auth));

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
        if(isError){
            navigate("/Login")
        }
        if (user && user.role !== "admin"){
          navigate("/")
        }
    }, [isError, user, navigate]);

  return (
    <div className="layout">
      <Sidebar />
      <div className="main__layout">
        <TopNav />
        <div className="content">
          <Breadcrumbs/>
          <Outlet />
        </div>
      </div>  
    </div>
    
  )
}

export default Dashboard;