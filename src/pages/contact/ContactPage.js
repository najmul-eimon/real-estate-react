import React, { useEffect } from 'react'
import Address from '../../components/contact/Address';
import Contact from '../../components/contact/Contact';
import Breadcrumb from '../../components/shared/Breadcrumb';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Real Estate | Contact';
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      <Breadcrumb
        data={[]}
        activePage="Contact us"
      />
      <Contact/>
      <Address/>
    </>
  )
}

export default ContactPage