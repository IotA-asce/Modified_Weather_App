import React from 'react'
import './style/error.css'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <>
            <div id="notfound">
                <div className="notfound">
                    <h1 id="err">40<span id="spanerr">4</span></h1>
                    <h3>
                        unfortunately this page does not exist
                    </h3>
                    <NavLink to="/">
                    <button id="goback">Home</button>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default ErrorPage
