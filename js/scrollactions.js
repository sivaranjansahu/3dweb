jQuery(document).ready(function($){
// init ScrollMagic Controller
var controller = new ScrollMagic.Controller();

// Scene Handler



var pin3Dbackground = new ScrollMagic.Scene({
  triggerElement: ".full-screen.blue", // point of execution
  duration: 5*window.innerHeight , // pin element for the window height - 1
  triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
  reverse:true // allows the effect to trigger when scrolled in the reverse direction
})
  .setPin(".full-screen.blue") // the element we want to pin
  //.setTween(initialLoad)
  //.setTween(tlFirstPage)
  .addTo(controller)
  .on("enter",function(){
     
  })
  .on("progress", function(e) {
    camera.lookAt(new THREE.Vector3(0, 0, 0));
  })
  
  
function autoscroll(currentindex,scrollpos){
  
  if((scrollpos - window.innerHeight*currentindex )>200){
    controller.scrollTo("#page"+(currentindex+2))
  }
}





var page1 = new ScrollMagic.Scene({
  triggerElement: ".section.full-screen.blue", // point of execution
  triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
  offset: window.innerHeight,
  // allows the effect to trigger when scrolled in the reverse direction
})
  .addTo(controller)
  
  .reverse(true)
  .on("enter", function(e) {
    //tlFirstPage.reverse();
    
    //tlFirstPage.timeScale(2).reverse();
    setTimeout(function(){
      tlSecondPage.play();
    },1000)
    
    console.log("start secondtrig");
    e.type=="enter" ? movecamera(...cameraAngles[1]) : movecamera(...cameraAngles[1])
    
  })
  .on("leave", function(e) {
    //tlFirstPage.reverse();
    tlFirstPage.play();
    tlSecondPage.reverse();
    console.log("start firsttrg");
    movecamera(...cameraAngles[0]);
    

  })
  
  
  

  var page2 = new ScrollMagic.Scene({
    triggerElement: ".section.full-screen.blue", // point of execution
    triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
    offset: 2*window.innerHeight,
    // allows the effect to trigger when scrolled in the reverse direction
  })
    .addTo(controller)
    .on("enter", function(e) {
      tlFirstPage.timeScale(2).reverse();
      tlSecondPage.reverse();
      //tlSecondPage.reverse();
      console.log("start secondtrig");
      e.type=="enter" ? movecamera(...cameraAngles[2]) : movecamera(...cameraAngles[2])
    })
    .on("leave", function(e) {
      tlFirstPage.play();
      tlSecondPage.play();
      console.log("start firsttrg");
      movecamera(...cameraAngles[1])
    })
    .reverse(true)
    
const cameraAngles = [
  [8,12,6],[6,16,9],[12, 18, 6],[4,7,2]
]

function movecamera(a, b, c) {
  var from = {
    x: camera.position.x,
    y: camera.position.y,
    z: camera.position.z
  };

  var to = {
    x: a,
    y: b,
    z: c
  };

  console.log(from);
  console.log(to);
  var tween = new TWEEN.Tween(from)
    .to(to, 600)
    .easing(TWEEN.Easing.Linear.None)
    .onUpdate(function() {
      camera.position.set(this.x, this.y , this.z);
      camera.lookAt(new THREE.Vector3(0, 0, 0));
    })
    .onComplete(function() {
      camera.lookAt(new THREE.Vector3(0, 0, 0));
      console.log("yo");
    })
    .start();
}

function moveCameraDelta(x){
  var from = {
    x: camera.position.x,
    y: camera.position.y,
    z: camera.position.z
  };

  var to = {
    x: camera.position.x + x,
    y: camera.position.y + x,
    z: camera.position.z + x
  };

  console.log(from);
  console.log(to);
  var tween = new TWEEN.Tween(from)
    .to(to, 600)
    .easing(TWEEN.Easing.Linear.None)
    .onUpdate(function() {
      camera.position.set(this.x, this.y , this.z);
      camera.lookAt(new THREE.Vector3(0, 0, 0));
    })
    .onComplete(function() {
      camera.lookAt(new THREE.Vector3(0, 0, 0));
      console.log("yo");
    })
    .start();
}


// onmousemove=function(e){
//   console.log(e.clientX/window.innerWidth);
//   moveCameraDelta(e.clientX/window.innerWidth);
// }

})