
 jQuery(document).ready(function($){

//declare variables
var ticking = false,
  decimalX = 0,
  decimalY = 0;

//Get the parent element, attach mousemove listener
document.getElementById("gallery").addEventListener('mousemove', cursorPositionHandler);

//Declare mousemove handler
function cursorPositionHandler(ev) {
  //Calculate amount to transform (range fron -0.5 to 0.5)
  decimalX = ev.clientX / window.innerWidth - 0.5;
  decimalY = ev.clientY / window.innerHeight - 0.5;
  
  //Request animation frame
  requestTick();
}

function requestTick() {
  //Check not already rendering
  if(!ticking) {
    requestAnimationFrame(update);
    //Set status
    ticking = true;
  }
}

function update(){
  //Animate rotations
  TweenLite.to(".wrapper", 0.2, {rotationY:-5*decimalX, rotationX:5*decimalY, ease:Power2.easeOut, transformPerspective:500, transformOrigin:"center"});
  //Set status
  ticking = false;
}

document.getElementsByClassName("wrapper")[0].addEventListener("click",function(){
    //alert();
    TweenLite.to(".wrapper", 1, {
        rotationY:20,  ease:Power2.easeOut, transformPerspective:500,transformOrigin:"left"
    });
})

 })
