// this module will parse the response html document into an array of urls
// the pattern of the target url follows <div class="g"><h3 class="r"><a href=[target]>Foo Bar</a></h3></div>
// the output will be ["www.infotrack.com.au", "www.stackoverflow.com", "www.github.com"]
module.exports = (resource) => {
    // the link can be found in <div class="g"><h3 class="r"><a href=[target]>Foo Bar</a></h3></div>
    const linkReg = /(?:<div\sclass=\"g\">[\s\S]*?<h3\sclass=\"r\">\s*?<a\shref=\")([^"]*)/g;

    const linkArr = [];
    // console.log(resource)
    // linkArr = ["url?q=http://www.infotrack.com.au&amp;abcxyz123" ...]
    resource.replace(linkReg, (j, s, d) => {
        linkArr.push(s); 
    }); 
    
    return linkArr.map(link => {
        return formatLink(link);
    });
}

function formatLink(link){
    const preReg = /\/url\?q=https?:\/\/(www\.)?/; //strip url?q=http(s)//(www.)
    const postReg = /&amp.*/; // strip &amp=abcxyz123...
    return link.replace(preReg, "").replace(postReg, "");
}