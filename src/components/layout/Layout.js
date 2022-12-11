import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../navigation/Footer';
import Navbar from '../navigation/Navbar';


export const SaveToLocalContext = createContext({});

const Layout = () => {
  const [showNav, setShowNav] = useState(false);
  const [getCategory, setGetCategory] = useState('');
  const [activeBtn, setActiveBtn] = useState('all');
  const [getCity, setGetCity] = useState(null);
  const [mainFilter, setMainFilter] = useState(null);

  const setCategoryLocal = (cat) => {
    setGetCategory(cat);
    setShowNav(false);
    setGetCity(null);
    setMainFilter(null);
    setActiveBtn(cat);
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
        setGetCity,
        mainFilter,
        setMainFilter, 
        activeBtn, 
        setActiveBtn
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