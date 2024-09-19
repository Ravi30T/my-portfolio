import { useState } from "react";
import axios from 'axios';
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import './index.css'
// import { eventWrapper } from "@testing-library/user-event/dist/utils";

    const Footer = () => {
        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        const [message, setMessage] = useState('')

        const onEnterName = event => {
            setName(event.target.value)
        }

        const onEnterEmail = event => {
            setEmail(event.target.value)
        }

        const onEnterMessage = event => {
            setMessage(event.target.value)
        }

        const onSubmitForm = event => {
            event.preventDefault()

            const userData = {
                Name: name,
                Email: email,
                Message: message,
            }

            axios.post('https://sheet.best/api/sheets/b46ffaca-dc58-4efe-86a5-6cd1f85d0708', userData).then((response) => {
                setName('')
                setEmail('')
                setMessage('')
            })
        }

        return (
            <div className="footer-bg">
            <div className="footer-bg-img">
                <div className="footer-main-card">
                    <div className="footer-contact-card">
                        <h1 className="footer-contact-heading">Drop a message !</h1>
                        <form className="contact-form" onSubmit={onSubmitForm}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" value={name} onChange={onEnterName} required/>
                
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" value={email} onChange={onEnterEmail} required/>
                
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" value={message} onChange={onEnterMessage} required></textarea>
                
                            <button type="submit">Send</button>
                        </form>
                    </div>
                    <div className="footer-address-container">
                        <p className="footer-address">
                            Hyderabad, Telangana, India.
                        </p>
                        <p className="footer-email">ravitejagatla3@gmail.com</p>
                        <div className='social-media-icons-container'>
                            <a href="https://www.linkedin.com/in/gatla-ravi-teja/" rel='noreferrer' target="_blank" className="anchor-el">
                                <button type='button' className='footer-nav-btn'><FaLinkedin /></button>
                            </a>

                            <a href="https://github.com/Ravi30T" rel='noreferrer' target="_blank" className="anchor-el">
                                <button type='button' className='footer-nav-btn'><FaGithub /></button>
                            </a>

                            <a href="https://www.instagram.com/gatla_ravi/" rel='noreferrer' target="_blank" className="anchor-el">
                                <button type='button' className='footer-nav-btn'><FaInstagramSquare /></button>
                            </a>
                            
                            <a href="https://x.com/Raviteja_Gatla" rel='noreferrer' target="_blank" className="anchor-el">
                                <button type='button' className='footer-nav-btn'><FaXTwitter /></button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="redirect-links-container">
                    <a href="#homeSection" rel='noreferrer' className="redirect-link">Home</a>
                    <a href="#aboutSection" className="redirect-link">About</a>
                    <a href="#skillsSection" className="redirect-link">Skills</a>
                    <a href="#projectsSection" className="redirect-link">Projects</a>
                </div>
               
                <p className="copyright-text"> @2024 Raviteja Gatla, inc. </p>
            </div>
        </div> 
        )
}


export default Footer