import React from 'react'

import Navbar from './components/Navbar'
import HomeCoponent from './components/HomeCoponent'
import Stats from './components/Stats'
import Card1 from './components/Card1'
import Hero from './components/Hero'
import Card2 from './components/Card2'
import Card3 from './components/Card3'
import SearchBar from './components/SearchBar'
import Footer from './components/footer'
import WhatsAppFloatingIcon from './components/WhatsAppFloatingIcon'
function App() {
  return (
    <div  className='max-h-screen leading-relaxed items-center font-latoN '>
      <Navbar/>
      <HomeCoponent/>
      
      <Stats/>
      <Hero/>
      <div className='text-center  ' > <h2 className='text-2xl text-[#007E85] font-bold' >Services we provide </h2>
      <p className='mb-10'>We offer top-notch solutions tailored to your needs. Our services include web development, UI/UX design, digital marketing, and IT consulting. With a focus on quality and innovation, we ensure seamless experiences that drive results. Whether you're a startup or an enterprise, we help you achieve your goals with efficiency and excellence.</p>
      </div>
      <Card1/>
      <div className='text-center my-20' > <h2 className='text-2xl text-[#007E85] font-bold'>Meet our previous clients </h2>
      <p className=''>We take pride in serving our patients with dedication and expert care. Many have trusted us with their health and experienced outstanding medical services. Their satisfaction and well-being are a testament to our commitment to quality healthcare.

Join our community of happy and healthy patients today!</p>
      </div>
      <Card2/>
      <div className='text-center my-20' > <h2 className='text-2xl text-[#007E85] font-bold' >Testimonial </h2>
      <p className=''>"The doctors were attentive and truly cared about my health. The treatment was effective, and I felt supported throughout my recovery."

"A wonderful experience The staff was professional, and the clinic had a warm, welcoming environment. Highly recommended!"

"I received excellent medical care with a personal touch. The doctors explained everything clearly and made me feel comfortable."

Your health is in good hands with us!</p>
      </div>
      <Card3/>
      <SearchBar/>
      <WhatsAppFloatingIcon phoneNumber={'03244574564'} message={`HI there I have visited your website I'm interested in getting more information about it`} />
      <Footer/>
    </div>
  )
}

export default App