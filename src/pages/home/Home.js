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
    window.scrollTo(0,0);
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