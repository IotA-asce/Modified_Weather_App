const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const hbs = require('hbs');

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates");

app.set('view engine', 'hbs');
app.set('views', path.join(template_path, "/views"));
hbs.registerPartials(path.join(template_path, "/partials"));

app.use(express.static(static_path));

app.get("/", (req, res) =>{
    res.render('index');
});

app.get("/about", (req, res) =>{
    res.render('about');
});

app.get("/weather", (req, res) => {
    res.render("weather");
});

app.get("*", (req, res) =>{
    res.render("404err");
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});