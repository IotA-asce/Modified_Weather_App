import React from 'react'
import './style/contact.css'

const Contact = () => {
    return (
        <>
            <div className="large_cont">
                <h3>Get in touch</h3>
                <div className="card_el">
                    <input size="30" type="number" name="phone" id="phone" autoComplete="off" placeholder="Phone number" />
                    <input size="30" type="email" name="email" id="email" autoComplete="off" placeholder="email" />
                </div>
                <div className="tarea">
                    <textarea name="textmessage" id="textmessage" cols="40" rows="10" placeholder="message"></textarea>
                </div>
                <div className="btn-el">
                    <button type="submit" className="mainBtn-el">Send Message</button>
                </div>
            </div>
        </>
    )
}

export default Contact
