const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken');

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send(`hello from server`);
})

// for registering
router.post('/register', async (req, res) => {

    const { name, email, username, phone, location, password, cpassword } = req.body;

    if (!name || !email || !username || !phone || !location || !password || !cpassword) {
        return res.status(422).json({ error: "all fields not filled in" })
    }

    try {
        const responseMail = await User.findOne({ email: email });
        const responseUsrn = await User.findOne({ username: username });

        if (responseMail || responseUsrn) {
            return res.status(422).json({ error: "account already exists" });
        } else if (password != cpassword) {
            return res.status(422).json({ error: "passwords dont match" });
        }

        const user = new User({ name, email, username, phone, location, password, cpassword })

        //encrypt data


        await user.save();
        res.status(201).json({ message: "user registered successfully" })

    } catch (error) {
        res.status(500).json({ error: "failed to register" });
        console.log(error);
    }

    //
    //
    //  *** with promise
    //  User.findOne({email: email})
    //     .then((userExists) => {
    //         if(userExists) {
    //             return res.status(422).json({error : "email already exists"})
    //         }
    //         const user = new User ({ name, email, username, phone, password, cpassword })
    //         user.save().then(() => {
    //             res.status(201).json({message: "user registered successfully"})
    //         }).catch((err) => res.status(500).json({error : "failed to register"}))
    //     }).catch(err => {
    //         console.log(err);
    //     }) 
    //
    //
})

// for login
router.post('/login', async (req, res) => {

    try {
        let token ;
        const { email, password } = req.body;

        // console.log(email, password); 

        if (!email || !password) {
                res.status(400).json({ error: `invalid data, error code : ${Math.floor(Math.random() * 9999999).toString(16)}` });
        }

        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(`token : ${token}`);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });


            if (!isMatch) {
                res.status(400).json({ error: `invalid data, error code : ${Math.floor(Math.random() * 9999999).toString(16)}` });
            } else {
                const location = userLogin.location;
                // console.log(`location is ${location}`);

                res.json({ message: "login success" });
            }
        } else {
                res.status(400).json({ error: `invalid data, error code : ${Math.floor(Math.random() * 9999999).toString(16)}` });
        }

    } catch (error) {
        console.log(error);
    }
})

module.exports = router;