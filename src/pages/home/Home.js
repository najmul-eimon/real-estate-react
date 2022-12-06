import React, { useEffect } from 'react'
import Contact from '../../components/contact/Contact';
import Banner from '../../components/home/Banner'
import Place from '../../components/home/Place';
import Blog from '../../components/blog/Blog';
import Property from '../../components/home/Property';
import Achievement from '../../components/shared/Achievement';
import Partner from '../../components/shared/Partner';

const Home = () => {
  useEffect(() => {
    document.title = 'Real Estate | Home';
  }, []);
  
  return (
    <>
      <Banner/>
      <Achievement/>
      <Property/>
      <Place/>
      <Blog data={"blog-section"}/>
      <Contact/>
      <Partner/>
    </>
  )
}

export default Home