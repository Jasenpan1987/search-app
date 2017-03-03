// create a string of ids which has been found in the links

module.exports = function(links, url){
    const linkArr = links.map((link, idx) => {
        if(link.toLowerCase().indexOf(url.toLowerCase()) !== -1) return idx;
        else return -1;
    })
    .filter(id => id !== -1);

    // throw new Error("server error")

    if(linkArr.length===0) return "0";
    else return linkArr.join(", ");
};