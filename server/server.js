const express = require("express");
const path = require("path");
const cors = require("cors")

const requestHelper = require("./util/requestHelper");
const parseHelper = require("./util/parseHelper");
const urlHelper = require("./util/urlMatchHelper");

const app = express();

app.use(express.static(path.resolve(__dirname, "../build")));

app.use(cors());

app.get("/api", (req, res) => {
    const { keywords, urlkeywords } = req.query;

    requestHelper(keywords)
        .then(domString => parseHelper(domString))
        .then(links => urlHelper(links, urlkeywords))
        .then(linkIds => {
            console.log("linkIds ", linkIds)
            res.status(200).json(linkIds);
        })
        .catch(error => {
            console.log("error ", error)
            res.status(500).send(new Error("Server Error"));
        })
});

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"))
})

const PORT = process.env.PORT || 8080;

app.listen(8080, () => {
    console.log("server listen to " + PORT);
});