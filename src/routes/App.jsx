import React from "react";
import Navbar from "../components/Navbar";
import HomeCoponent from "../components/HomeCoponent";
import WhatsAppFloatingIcon from "../components/WhatsAppFloatingIcon";
import Stats from "../components/Stats";
// import Card1 from "../components/Card1";
import Hero from "../components/Hero";
import HomeCard from '../components/HomeCard'
// import Card2 from "../components/Card2";
// import Card3 from "../components/Card3";
import SearchBar from "../components/SearchBar";
import Footer from "../components/footer";
import NeurologicalDisorders from "../components/NeurologicalDisorders";
import BetweenText from "../components/BetweenText";
import Doctor2 from "../components/Doctor2";
import Doctor3 from "../components/Doctor3";
function App() {
  return (
    <div className="max-h-screen  leading-relaxed items-center  ">
        <Navbar  />
      <div className="p-6">
        <HomeCoponent />
        <NeurologicalDisorders />
      
        <Doctor2/>
        <Doctor3/>
        <Stats />
        <Hero />

        {/* // */}

        <BetweenText  Heading='Service We Provide' 
        paragraph=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              aliquid at rem quibusdam! Quis distinctio iure corporis iste
              voluptates, voluptas nemo ex eaque?'
              animation='fade-down'
        />
        <HomeCard/>

        <SearchBar />
        <WhatsAppFloatingIcon phoneNumber={'+923104168104'} message={`I there I have visited your website I'm interested in getting more information about it`} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
