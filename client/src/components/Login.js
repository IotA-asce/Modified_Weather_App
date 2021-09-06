import React, { useState } from 'react'
import './style/register.css'
import { NavLink, useHistory } from 'react-router-dom'

const Login = () => {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginuser = async (e) => {
        e.preventDefault();

        const res = await fetch('/login', {
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        })

        const data = res.json();

        if(res.status === 400 || !data){
            window.alert("Invalid details")
        }
        else{
            window.alert("login success");
            history.push("/")
        }
    }

    return (
        <>
            <div className="signup-cont">
                <div className="signup-form">
                    <h2 className="form-title">Sign in</h2>
                    <form method="POST" className="register-form" id="register-form">
                        <div className="form-group">
                            <input
                                size="30"
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="off"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="email"
                            />
                        </div>
                        <h3>or</h3>

                        <div className="form-group form_ext">
                            <input
                                size="30"
                                type="text"
                                name="username"
                                id="username"
                                autoComplete="off"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="username"
                            />
                        </div>

                        <div className="form-group">
                            <input
                                size="30"
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="off"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="password"
                            />
                        </div>

                        <div className="submit">
                            <input
                                type="submit"
                                name="signup"
                                id="signup"
                                className="mainBtn"
                                value="Signin"
                                onClick={loginuser}
                            />
                            <NavLink to="/register"><button className="altBtn">Sign up</button></NavLink>
                        </div>

                    </form>
                </div>
                <div className="shapes">
                    <div className="sun"></div>
                    <div className="grass"></div>
                    <div className="grass1"></div>
                    <div className="grass2"></div>
                </div>
            </div>
        </>
    )
}

export default Login
