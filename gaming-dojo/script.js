console.log("page loaded...");
var quantitySpan = document.querySelector("#cart-quantity");
var mainImg = document.querySelector("#main-img");
var cookieDiv = document.querySelector("#cookies");

function linuxSupport() {
    alert("This game is supported on Linux!");
}

function buy() {
    quantitySpan.innerText++; // this works this time
    // other times we will need to use the built in function
    // parseInt(number)
}

function switchImg(imgName) {
    // console.log(imgName);
    mainImg.src = "assets/" + imgName;
}

function gameStart() {
    cookieDiv.remove();
}