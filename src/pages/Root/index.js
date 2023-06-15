import React from 'react';
import { Outlet, useLocation } from "react-router-dom"
import NavigationBar from "../../components/NavigationBar"


const RootLayout = () => {
  const location = useLocation()

  // Check if the current location is the Login page
  const isLoginPage = location.pathname === '/login'

  // Render the NavigationBar only if the current location is not the Login page
  return (
    <>
      {!isLoginPage && <NavigationBar />}
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout