import React, { useState } from 'react';

function HamburgerMenu() {
  //Menünün başlangıç değeri kapalı olarak ayarlanır.
  const [menuOpen, setMenuOpen] = useState(false);

  //MenuOpen durumunu tersine çevirecek bir fonksiyon ayarlanır.
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="nav-hamburger" onClick={toggleMenu}>
        <span className="hamburger-icon">&#9776;</span>
      </div>
      {menuOpen && (
        <div className="nav-hamburger-menu">
          <ul>
            <li><a href="#hero" className="href">Home</a></li>
            <li><a href="#classes" className="href">Classes</a></li>
            <li><a href="#trainers" className="href">Trainer</a></li>
            <li><a href="#review" className="href">Review</a></li>
            <li><a href="#contact" className="href">Contact</a></li>
            <li><a href="#joinus" className="href-join">JOIN US</a></li>
          </ul>
        </div>
      )}
    </>
  );
}

export default HamburgerMenu;
