// sending request to google and get the entire response dom string

const axios = require("axios");

const HEAD_URL = "http://www.google.com/search?q=";
const TAIL_URL = "&ie=utf-8&oe=utf-8&start=0&num=100";

module.exports = function(keywords){
    return axios.get(HEAD_URL.concat([keywords, TAIL_URL]))
        .then(response => response.data);
};