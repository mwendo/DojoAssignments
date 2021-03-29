console.log("script loading...");

var x = document.getElementById("agua");

function playVideo () {
    console.log("playing sound");
    x.play();
}

function stopVideo () {
    console.log("stopping video");
    x.pause();
}