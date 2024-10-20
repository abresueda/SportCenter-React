import React from "react";

const ContactForm = () => {
    return (
        <div class="form-info-container">
        <div className="info-container">
                <div className="phone">
                    <h3>Mobile Number</h3>
                    <p>+135 773 321 4442</p>
                </div>
                <div className="email">
                    <h3>Email Address</h3>
                    <p>demo@demo.com</p>
                </div>
                </div>
        <div className="form-container">
            <h2>Make An Appointment</h2>
            <form>
                <div className="form-group">
                    <input type="text" id="name" placeholder="Your Name" />
                </div>
                <div className="form-group">
                    <input type="text" id="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                    <textarea  id="message" rows="6" placeholder="Your Message"></textarea>
                </div>
            </form>
        </div>
        </div>
    );
};

export default ContactForm;