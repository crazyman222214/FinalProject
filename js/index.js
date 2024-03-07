const slideshowFilePaths = ["./img/PicOfMe.jpg", "./img/CraneMantis.jpg",  "./img/KyleHillAndI.jpg"];
let slideshowImage = document.getElementById("slideshowImage");
let slideshowPosition = 0;
let slideshowSpeed = 2;


setInterval(console.log("YAY"), 20);
window.onload = (event) => {
    setInterval(slideshow(), 2000);
}

function slideshow() {
    let imgPath = slideshowFilePaths[slideshowPosition]; 
    slideshowImage.src = imgPath;


    slideshowPosition++;
    console.log("YAY");
}