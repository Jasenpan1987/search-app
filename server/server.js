const express = require("express");
const cors = require("cors")

const requestHelper = require("./util/requestHelper");
const parseHelper = require("./util/parseHelper");

const app = express();

app.use(cors);
// const regx = /(?:<div\sclass=\"g\">[\s\S]*?<h3\sclass=\"r\">\s*?<a\shref=\")([^"]*)/g;


app.get("/api", (req, res) => {
    const queryString = req.query.keywords
    console.log(queryString);

    requestHelper("hello+world")
        .then(domString => parseHelper(domString))
        .then(links => res.json(links))
        .then()
    
});

app.listen(8080);