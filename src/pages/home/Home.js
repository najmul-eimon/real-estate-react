import React, { useEffect } from 'react';
import Contact from '../../components/contact/Contact';
import Banner from '../../components/home/Banner'
import Place from '../../components/home/Place';
import Blog from '../../components/blog/Blog';
import Achievement from '../../components/shared/Achievement';
import Partner from '../../components/shared/Partner';
import AllProperty from '../../components/home/AllProperty';

const Home = () => {
  
  useEffect(() => {
    document.title = 'Real Estate | Home';
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  
  return (
    <>
      <Banner/>
      <Achievement/>
      <AllProperty/>
      <Place/>
      <Blog data={"blog-section"}/>
      <Contact/>
      <Partner/>
    </>
  )
}

export default Home