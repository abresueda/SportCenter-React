import React from 'react';

function NavLinks() {
  return (
    <ul className="nav-ul">
      <li>
        <a href="#hero" className="href">Home</a>
        <a href="#classes" className="href">Classes</a>
        <a href="#trainers" className="href">Trainer</a>
        <a href="#review" className="href">Review</a>
        <a href="#contact" className="href">Contact</a>
        <a href="#joinus" className="href-join">JOIN US</a>
      </li>
    </ul>
  );
}

export default NavLinks;
