import React from "react";
import HeroImage from './HeroImage.jsx';
import HeroInfo from './HeroInfo.jsx';
import HeroStats from './HeroStats.jsx';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="hero-container">
                <HeroImage />
                <HeroInfo />
                <HeroStats />
            </div>
        </section>
    );
};

export default Hero;