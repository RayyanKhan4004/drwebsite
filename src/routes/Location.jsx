

import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import SearchBar from '../components/SearchBar'
import LocatiionHomeHealth from '../components/LocatiionHomeHealth'
import LocationServicesWeProvideCards from '../components/LocationServicesWeProvideCards'
import WhatsAppFloatingIcon from '../components/WhatsAppFloatingIcon'


function Location() {
const mapCss = ` hover:border-2 hover:border-theme1`
  return (
  <>
      <Navbar/>
      <WhatsAppFloatingIcon phoneNumber={'03244574564'} message={`HI There I have visited your website I'm interested in getting more information about it`} />
  <div className='p-6' >
      <div className='flex justify-evenly max-lg:flex-col max-lg:gap-4 items-center ' >



    <div className='w-auto  flex items-center justify-center  ' >
   
  <iframe className={mapCss}  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.194928259115!2d74.19000967530496!3d31.43630015129128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918fe6b04621a15%3A0x3cb9645afd02f344!2sSaleem%20Memorial%20Hospital!5e0!3m2!1sen!2s!4v1726776625340!5m2!1sen!2s" width="auto" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>
      <div className='w-auto  flex items-center justify-center '  >
      <iframe className={mapCss}  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13612.576833699277!2d74.2358843!3d31.465219!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919021ea668a7e3%3A0xe50da7d1f9af0846!2sFarooq%20Hospital%20West%20Wood%20Branch%20Lahore!5e0!3m2!1sen!2s!4v1728248416580!5m2!1sen!2s" width="auto" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <iframe  className={mapCss} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.9553375813102!2d74.18771149999999!3d31.387794999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ffbdf795cecb%3A0x6c3f59eb87fa1fe4!2sBahria%20International%20Hospital!5e0!3m2!1sen!2s!4v1728508800076!5m2!1sen!2s" width="auto" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
  </div>
  <Footer/>
  </>
  )
}

export default Location
