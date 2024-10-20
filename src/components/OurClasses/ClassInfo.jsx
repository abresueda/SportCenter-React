import React from "react";
import yoga from '../../images/yoga.jpg';

const ClassInfo = () => {
    return (
        <div className="class-current">
        <div className="class-text-container">
            <h2>Why are your Yoga?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed et aliquam ratione repellendus rem sapiente! Consectetur beatae suscipit quasi dolor minima perferendis quas ea aperiam molestiae.</p>
            <br />
            <h2>When comes Yoga Your Time.</h2>
            <p>Saturday-Sunday: 8:00am - 10:00am</p>
            <p>Monday-Tuesday: 10:00am - 12:00pm</p>
            <p>Wednesday-Friday: 3:00pm - 6:00pm</p>
            </div>
            <div className="class-image-container">
                <img src={yoga} alt="" id="current-image"/>
            </div>
        </div>
    );
};

export default ClassInfo;