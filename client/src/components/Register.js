import React, {useState} from 'react'
import './style/register.css'
import { NavLink, useHistory } from 'react-router-dom'

const Register = () => {
    const history = useHistory();
    const [rstatus, setRstatus] = useState(false)
    const [user, setUser] = useState({
        name: "",
        email: "",
        username: "",
        phone: "",
        location: "",
        password: "",
        cpassword: "" 
    })

    let name, value;
    const handleInputs = (e) => {
        console.log(e)
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value})
    }

    const PostData = async (e) => {
        e.preventDefault();

        const {name, email, username, phone, location, password, cpassword} = user;

        const res = await fetch ("/register", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                name, email, username, phone, location, password, cpassword
            })
        })

        const data = await res.json();

        if(data.status === 422 || !data){
            window.alert("invalid data");
        }else{
            setRstatus(true);
            history.push('/login');
        }
    }

    return (
        <>
            <div className="signup-cont">
                <div className="signup-form">
                    <h2 className="form-title">Sign <span>up</span></h2>
                    <form method="POST" className="register_form" id="register-form">
                        <div className="form-group">
                            <input size="30" type="text" name="name" id="name" autoComplete="off" value={user.name} onChange={handleInputs} placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <input size="30" type="email" name="email" id="email" autoComplete="off" value={user.email} onChange={handleInputs} placeholder="Your email" />
                        </div>
                        <div className="form-group">
                            <input size="30" type="text" name="username" id="username" autoComplete="off" value={user.username} onChange={handleInputs} placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <input size="30" type="number" name="phone" id="phone" autoComplete="off" value={user.phone} onChange={handleInputs} placeholder="phone" />
                        </div>
                        <div className="form-group">
                            <input size="30" type="text" name="location" id="location" autoComplete="off" value={user.location} onChange={handleInputs} placeholder="location" />
                        </div>
                        <div className="form-group">
                            <input size="30" type="password" name="password" id="password" autoComplete="off" value={user.password} onChange={handleInputs} placeholder="password" />
                        </div>
                        <div className="form-group">
                            <input size="30" type="password" name="cpassword" id="cpassword" autoComplete="off" value={user.cpassword} onChange={handleInputs} placeholder="confirm password" />
                        </div>
                        <div className="submit_el">
                            <input type="submit" name="signup" id="signup" className="mainBtn" value="Signup" onClick={PostData}/>
                            {/* <input type="submit" name="signup" id="signup" className="altBtn" value="Already have an account" /> */}
                            <NavLink to="/login"><button className="altBtn">Already have an account</button></NavLink>

                            {/* <button name="signup" id="signup" value="registered">Register</button> */}
                        </div>
                        {rstatus && "registration success"}
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

export default Register
