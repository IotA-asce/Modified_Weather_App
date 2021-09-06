import React, { useEffect, useState } from 'react'
import './style/about.css'
import { useHistory } from 'react-router-dom';

const About = () => {

    const history = useHistory()
    const [userData, setUserData] = useState();

    let randCode = (Math.floor(Math.random() * 9000000)).toString(16);
    let url = `https://avatars.dicebear.com/api/human/${randCode}.svg`
    console.log(url);

    const callAboutPage = async () => {

        try {

            const res = await fetch('/about',{
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })

            const data = await res.json();
            setUserData(data);

            if(!res.status === 200) {
                throw new Error(res.error);
            }

        } catch (error) {
            console.log(error)
            history.push("/login");
        }
    }

    useEffect(() => {
        callAboutPage();
    }, [])

    return (
        <>
            <div className="cont">
                <form method="GET">

                    <div className="pic">
                        <img src={url} alt="not found" />
                    </div>
                    <div className="card_el">
                        <div className="l-el">
                            <h5>Name: </h5>
                            <h5>{userData != null ? userData.name : ''}</h5>
                        </div>
                        <div className="l-el">
                            <h5>Username: </h5>
                            <h6>{userData != null ? userData.username : ''}</h6>
                        </div>
                        <div className="l-el">
                            <h5>email: </h5>
                            <h5>{userData != null ? userData.email : ''}</h5>
                        </div>
                        <div className="l-el">
                            <h5>Phone: </h5>
                            <h5>{userData != null ? userData.phone : ''}</h5>
                        </div>
                        <div className="l-el">
                            <h5>Location: </h5>
                            <h5>{userData != null ? userData.location : ''}</h5>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default About
