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

async function apiCall() {
    let quote = fetch("https://thesimpsonsquoteapi.glitch.me/quotes").then(a => a.text()).then(b => JSON.parse(b).quote);
    quoteText.innerText = quote; 
}