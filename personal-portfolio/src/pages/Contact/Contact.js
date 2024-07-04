import React from 'react'
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message"></textarea>
                </div>
                <button type="submit" className="submit-button">Send</button>
            </form>
        </div>
    )
}

export default Contact