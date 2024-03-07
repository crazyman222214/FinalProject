const slideshowFilePaths = ["./img/PicOfMe.jpg", "./img/CraneMantis.jpg",  "./img/KyleHillAndI.jpg"];
let slideshowImage = document.getElementById("slideshowImage");
let quoteText = document.getElementById("quote");
let slideshowPosition = 0;
let slideshowSpeed = 2;


window.onload = (event) => {
    setInterval(function() {slideshow()}, 2000); 
    apiCall(); 
} 

function slideshow() {
    let imgPath = slideshowFilePaths[slideshowPosition]; 
    slideshowImage.src = imgPath;
    slideshowPosition = (slideshowPosition >= slideshowFilePaths.length-1) ? 0 : slideshowPosition + 1; 
}

function apiCall() {
    let json = fetch("https://thesimpsonsquoteapi.glitch.me/quotes").then(a => a.text()).then(b => JSON.parse(b));
    json.then(c => quoteText.innerHTML = c[0].quote + " -\"" + c[0].character + "\"");
    console.log(json);  
} 