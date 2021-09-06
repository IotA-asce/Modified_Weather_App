const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
dotenv.config({path : './config.env'})
const port = process.env.PORT;


require("./db/conn");
app.use(express.json());
// const User = require("./model/userSchema");

app.use(require('./router/auth'));



// *** 
// middleware for internal process like login
// const middleware = (req, res, next) => {
//     console.log(`hello middleware`);
//     next();
// }

// app.get('/', (req, res) => {
//     res.send("hello");
// })

// app.get("/about", middleware,  (req, res) => {
//     res.send("hello about");
// })

app.get("/contact", (req, res) => {
    res.send("hello contact");
})

app.get("/signin", (req, res) => {
    res.send("hello signin");
})

app.get("/signup", (req, res) => {
    res.send("hello signup");
})

app.get("/*", (req, res) => {
    res.send("error 404");
})

app.listen(port, () => {
    console.log(`listening to port: ${port}`);
})


// mongodb+srv://iota:<password>@cluster0.cwcux.mongodb.net/myFirstDatabase?retryWrites=true&w=majority