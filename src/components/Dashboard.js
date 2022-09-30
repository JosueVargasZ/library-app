import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Books } from './Books'
import { Navbar } from './Navbar'

export const Dashboard = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {

    // if(localStorage.getItem('isLoggedIn')){
    //   setIsLoggedIn(localStorage.getItem('isLoggedIn'));
    //   console.log(isLoggedIn)
    // }
    
    if(!isLoggedIn){
      navigate("/auth");
    }

  }, []);
  

  return (
    <>
      {(isLoggedIn) && <Navbar />}

      <Outlet />
    </>
  )
}
