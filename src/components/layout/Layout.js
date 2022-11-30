import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../navigation/Footer';
import Navbar from '../navigation/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default Layout