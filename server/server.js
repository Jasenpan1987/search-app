const express = require("express");
const cors = require("cors")

const requestHelper = require("./util/requestHelper");
const parseHelper = require("./util/parseHelper");
const urlHelper = require("./util/urlMatchHelper");

const app = express();

app.use(cors());
// const regx = /(?:<div\sclass=\"g\">[\s\S]*?<h3\sclass=\"r\">\s*?<a\shref=\")([^"]*)/g;

app.get("/api", (req, res) => {
    // console.log("request income")
    const { keywords, url } = req.query;
    
    // console.log(keywords, url);
    // res.json({keywords, url});

    requestHelper(keywords)
        .then(domString => parseHelper(domString))
        .then(links => urlHelper(links, url))
        .then(linkIds => res.json(linkIds))
});

app.listen(8080);