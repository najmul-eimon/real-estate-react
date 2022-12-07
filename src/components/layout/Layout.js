import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../navigation/Footer';
import Navbar from '../navigation/Navbar';


export const SaveToLocalContext = createContext({});
const Layout = () => {

  const [showNav, setShowNav] = useState(false);
  const [getCategory, setGetCategory] = useState('');
  const [getCity, setGetCity] = useState(null);

  const setCategoryLocal = (cat) => {
    setGetCategory(cat);
    setShowNav(false);
  }
  
  return (
    <>
      <SaveToLocalContext.Provider value={{
        showNav, 
        setShowNav, 
        getCategory, 
        setGetCategory, 
        setCategoryLocal,
        getCity, 
        setGetCity
      }}>
        <Navbar/>
          <main>
            <Outlet/>
          </main>
        <Footer/>
      </SaveToLocalContext.Provider>
    </>
  )
}

export default Layout