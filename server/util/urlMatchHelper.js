// create new array of index if the url can be found in the link

module.exports = function(links, url){
    return links.map((link, idx) => {
        console.log(link, idx, url)
        if(link.indexOf(url) !== -1) return idx;
    });
};