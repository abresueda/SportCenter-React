import React from "react";
import "./Footer.css";
import FooterImage from '../../images/logo.png';

const Footer = () => {
    return (
        <footer>
        <div className="footer-container">
            <img src= {FooterImage}alt="Logo" /> 
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum cum reprehenderit aliquam voluptates nesciunt enim consequuntur harum rerum animi natus aperiam ipsum reiciendis nihil cupiditate odio, hic laboriosam tenetur quibusdam.</p> 
        </div>
        <div className="footer-ul">
            <ul className="footer-li">
                <h2>Information</h2>
                <li>About Us</li>
                <li>Classes</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            <ul className="footer-li">
                <h2>Helpful Links</h2>
                <li>Services</li>
                <li>Supports</li>
                <li>Terms & Condition</li>
                <li>Privacy Policy</li>
            </ul>
        </div>     
    </footer> 
    );
};

export default Footer;