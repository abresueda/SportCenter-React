import React from "react";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import "./Contact.css";

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-info-container">
            <h1>CONTACT US</h1>
            <p className="contact-description">Lorem ipsum is not simply random text. It has roots in a piece of classical at <br /> Hampden-Sydney College.</p>
            
        </div>
            <div className="contact-container">
            <ContactForm />
            <ContactMap />
            </div>
        </section>
    );
};

export default Contact;