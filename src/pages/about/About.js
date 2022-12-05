import React from 'react';
import AboutUs from '../../components/about/AboutUs';
import Achievement from '../../components/shared/Achievement';
import Partner from '../../components/shared/Partner';
import Breadcrumb from '../../components/shared/Breadcrumb';

const About = () => {
  return (
    <>
      <Breadcrumb
        data={[]}
        activePage="About"
      />
      <AboutUs/>
      <Achievement/>
      <Partner/>
    </>
  )
}

export default About