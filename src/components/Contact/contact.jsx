import React, { useRef, useState } from 'react';
import './contact.css'
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png'
import twitterIcon from '../../assets/twitter.png';
import InstagramIcon from '../../assets/instagram.png';
import LinkedInIcon from '../../assets/linkedin.png';
import GitHubIcon from '../../assets/github.png';
import { submitDetails } from '../../api/hubspot';

const Contact = () => {
    const form = useRef();
    const [loading, setloading] = useState(false);
    const sendEmail = async (e) => {
        e.preventDefault();
        setloading(true);
        const value = getFormValues(form.current);
        await submitDetails(value.email, value.your_name, value.message)
        setloading(false);
    };
    return (
        <section id="contactPage">
            <div id="mySkills">
                <h1 className="contactPageTitle">My Skills</h1>
                <p className="skillDesc">
                    I have A strong foundation in Kotlin and Front End Development.
                    Some of my skiils that I have worked with includes
                </p>
                <div className="skillImgs">
                    <img src={Walmart} alt="Skills" className="skillImg" />
                    <img src={Adobe} alt="Skills" className="skillImg" />
                    <img src={Microsoft} alt="Skills" className="skillImg" />
                    <img src={Facebook} alt="Skills" className="skillImg" />
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name='your_name' />
                    <input type="email" className="email" placeholder='Your Email' name='email' />
                    <textarea name="message" rows="5" placeholder='Your Message' className="msg"></textarea>
                    <button className="submitBtn" type="submit" value='Send' disabled={loading}>{
                        loading ? 'Submitting' : 'Submit'
                    }</button>
                    <div className="links">
                        <a href="https://twitter.com/Hitesh_1406"><img src={twitterIcon} alt="Twitter" className="link" /></a>
                        <a href="https://www.instagram.com/_hitesh_1406/"><img src={InstagramIcon} alt="Instagram" className="link" /></a>
                        <a href="https://www.linkedin.com/in/hitesh-gandhi-a93a17207/"><img src={LinkedInIcon} alt="LinkedIn" className="link" /></a>
                        <a href="https://github.com/Hitesh-Gandhi"><img src={GitHubIcon} alt="GitHub" className="link" /></a>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;

function getFormValues(form) {
    const formData = new FormData(form);
    const values = {};

    for (const [name, value] of formData.entries()) {
        // Handle array-like names for multiple inputs with the same name
        if (name.endsWith('[]')) {
            values[name.slice(0, -2)] = (values[name.slice(0, -2)] || []).concat(value);
        } else {
            values[name] = value;
        }
    }

    return values;
}