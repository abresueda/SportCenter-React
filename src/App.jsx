import React from 'react'
import Navbar from './components/Navbar/navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import OurClasses from './components/OurClasses/OurClasses.jsx';
import Trainers from './components/Trainers/Trainers.jsx';
import Purchase from './components/Trainers/Purchase.jsx';
import Reviews from './components/Reviews/Reviews.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <OurClasses />
      <Trainers />
      <Purchase />
      <Reviews />
      <Contact />
      <Footer />
      
    </>
  );
}

export default App
