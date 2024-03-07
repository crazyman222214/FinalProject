const slideshowFilePaths = ["./img/PicOfMe.jpg", "./img/CraneMantis.jpg",  "./img/KyleHillAndI.jpg"];
const slideshowImage = document.getElementById("slideshowImage");
let slideshowPosition = 0;
let slideshowSpeed = 2;


setInterval(slideshow(), 2000);


function slideshow() {
    slideshowImage.src = slideShowFilePaths[slideshowPosition];
    slideshowPosition++;
    console.log("YAY");
}