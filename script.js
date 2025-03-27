isItTheDate = false;

backgroundNum = 0;

var countDownDate = new Date("April 4, 2025 14:00:00").getTime();

window.addEventListener("load", onload())

function onload() {

  /* preload the images we want to show */
  preloadImage("images/bg01.png");
  preloadImage("images/bg02.png");
  preloadImage("images/bg03.png");
  preloadImage("images/bg04.png");
  preloadImage("Dirt_block.png");
  preloadImage("Grass_block.png");
}


// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

function cancelCountdown() {

  document.getElementById("timer").innerHTML = "THE MOD IS LIVE!";

}



function preloadImage(url) {
  var img = new Image();
  img.src = url;
}







var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}