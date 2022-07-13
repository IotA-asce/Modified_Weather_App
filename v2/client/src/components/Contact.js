import React, { useState, useEffect } from 'react'
import './style/contact.css'

const Contact = () => {


    const [userData, setUserData] = useState({
        phone: "",
        email: "",
        message: ""
    });

    const callContactPage = async () => {

        try {

            const res = await fetch('/contact', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })

            const data = await res.json();
            setUserData(
                { ...userData, phone: data.phone, email: data.email }
            );
            console.log(data);

            if (!res.status === 200) {
                setUserData({
                    email: "",
                    phone: "",
                    message: ""

                })
                throw new Error(res.error);

            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        callContactPage();
    }, [])

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserData({ ...userData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { phone, email, message } = userData;

        const res = await fetch('/contact',{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                phone, email, message
            })
        });

        const data = await res.json()
        if(!data){
            alert("message not sent")
        }else{
            setUserData(...userData);
        }
    }

    return (
        <>
            <div className="large_cont">
                <h3>Get in touch</h3>
                <div className="card_el">
                    <input
                        size="30"
                        onChange={handleChange}
                        value={userData.phone}
                        type="number"
                        name="phone"
                        id="phone"
                        autoComplete="off"
                        placeholder="Phone number"
                    />
                    <input
                        size="30"
                        onChange={handleChange}
                        value={userData.email}
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="off"
                        placeholder="email"
                    />
                </div>
                <div className="tarea">
                    <textarea
                        onChange={handleChange}
                        value={userData.message}
                        name="message"
                        id="textmessage"
                        cols="40"
                        rows="10"
                        placeholder="message"
                    ></textarea>
                </div>
                <div className="btn-el">
                    <button
                        type="submit"
                        className="mainBtn-el"
                        onClick={handleSubmit}
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </>
    )
}

export default Contact
