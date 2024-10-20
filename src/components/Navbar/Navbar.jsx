import React, { useState, useEffect } from 'react';
import Logo from './logo.jsx';
import NavLinks from './navLinks.jsx';
import HamburgerMenu from './hamburgerMenu.jsx';
import './Navbar.css';

function Navbar() {
  //Sayfanın dikey kaydırma konumunu saklamak için kullanılır.
  const [scrollY, setScrollY] = useState(0);

  //Bu hook, her kaydırma olayı gerçekleştiğinde çalışacak şekilde ayarlanmıştır.
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  //scrollY sıfırdan büyükse scrolled sınıfını ekler.
  return (
    <nav className={`nav-scroll ${scrollY > 0 ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-div container">
        <Logo />
        <NavLinks />
        <HamburgerMenu />
      </div>
    </nav>
  );
}

export default Navbar;
