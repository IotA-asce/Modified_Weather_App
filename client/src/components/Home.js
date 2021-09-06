import React, { useState, useEffect } from 'react'
import './style/home.css';
import { NavLink } from 'react-router-dom'

const Home = () => {

    const [username, setUsername] = useState('');

    const callHomePage = async () => {

        try {

            const res = await fetch('/contact', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })

            const data = await res.json();
            if (data) {
                setUsername(data.name);
            }

            if (!res.status === 200) {
                throw new Error(res.error);
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        callHomePage();
    }, [])


    return (
        <div className="cont">
            <div className="txt">
                <h1>{username.length > 0 ? `hi ${username}` : ''}</h1>
                <h2>welcome to <span>iota.io</span></h2>
                <div className="btns">
                    <NavLink to="/weather">
                        <button className="pw">Personalized Weather</button>
                    </NavLink>
                    <NavLink to="/about">
                        <button className="lg">About</button>
                    </NavLink>
                </div>
            </div>
            <div className="square"></div>
            <div className="sqr"></div>
            <div className="circle"></div>
        </div>
    )
}

export default Home
