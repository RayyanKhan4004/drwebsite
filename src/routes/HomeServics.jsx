import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import SearchBar from '../components/SearchBar'
import Card1 from '../components/Card1'
import LocatiionHomeHealth from '../components/LocatiionHomeHealth'
import LocationServicesWeProvideCards from '../components/LocationServicesWeProvideCards'
import WhatsAppFloatingIcon from '../components/WhatsAppFloatingIcon'
function Location() {
  return (
  <>
      <Navbar/>
      <WhatsAppFloatingIcon phoneNumber={'+923104168104'} message={`Hi there I have visited your website I'm interested in getting more information about it`} />
  <div className='p-6' >
        <LocatiionHomeHealth/>
        <LocationServicesWeProvideCards/>   
        <Card1/>      

      <SearchBar/>
  </div>
  <Footer/>
  </>
  )
}

export default Location
