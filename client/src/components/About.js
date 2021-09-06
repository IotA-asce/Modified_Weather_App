import React, { useEffect } from 'react'
import './style/about.css'
import { useHistory } from 'react-router-dom';

const About = () => {

    const history = useHistory()

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
                            <h5>Mu In Nasif</h5>
                        </div>
                        <div className="l-el">
                            <h5>Username: </h5>
                            <h6>iota_</h6>
                        </div>
                        <div className="l-el">
                            <h5>email: </h5>
                            <h5>muinnasiinoin[iiobuibiu@gmail.com</h5>
                        </div>
                        <div className="l-el">
                            <h5>Phone: </h5>
                            <h5>7044944262</h5>
                        </div>
                        <div className="l-el">
                            <h5>Location: </h5>
                            <h5>Kolkata</h5>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default About
