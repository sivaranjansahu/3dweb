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
  .addTo(controller)
  .on("enter",function(){
     console.log("entered pin3Dbackground")
  })
  .on("progress", function(e) {
    camera.lookAt(new THREE.Vector3(0, 0, 0));
  })
  

var story1Scene2 = new ScrollMagic.Scene({
  triggerElement: ".section.full-screen.blue", // point of execution
  triggerHook: 0, 
  offset: window.innerHeight,
})
  .addTo(controller)
  .reverse(true)
  .on("enter", function(e) {
    console.log("entered story1Scene2");

    e.type=="enter" ? movecamera(...cameraAngles[1]) : movecamera(...cameraAngles[1])
    setTimeout(function(){
      s1t2.play();
    },1000)
  })
  .on("leave", function(e) {
    //s1t1.reverse();
    s1t1.play();
    s1t2.reverse();
    console.log("leaving story1Scene2");
    movecamera(...cameraAngles[0]);
    

  })
  
  
  

  var story1Scene3 = new ScrollMagic.Scene({
    triggerElement: ".section.full-screen.blue", // point of execution
    triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
    offset: 2*window.innerHeight,
    // allows the effect to trigger when scrolled in the reverse direction
  })
    .addTo(controller)
    .on("enter", function(e) {
      console.log("entered story1Scene3");
      s1t1.timeScale(2).reverse();
      s1t2.timeScale(2).reverse();
      setTimeout(function(){
        s2t1.play();
      },1000)
      // s1t1.timeScale(2).reverse();
      // s1t2.timeScale(2).reverse();
      
      //s1t2.reverse();
      e.type=="enter" ? movecamera(...cameraAngles[2]) : movecamera(...cameraAngles[2])
    })
    .on("leave", function(e) {
      // s1t1.play();
      s2t1.reverse();
      s1t1.play();
      s1t2.play();
      console.log("leaving story1Scene3");
      movecamera(...cameraAngles[1])
    })
    .reverse(true)
    


    var story2Scene1 = new ScrollMagic.Scene({
      triggerElement: ".section.full-screen.blue", // point of execution
      triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
      offset: 3*window.innerHeight,
      // allows the effect to trigger when scrolled in the reverse direction
    })
      .addTo(controller)
      .on("enter", function(e) {
        s2t1.play();
        s1t2.reverse();
        console.log("start secondtrig");
        e.type=="enter" ? movecamera(...cameraAngles[2]) : movecamera(...cameraAngles[2])
      })
      .on("leave", function(e) {
        // s2t1.play();
        console.log("start firsttrg");
        movecamera(...cameraAngles[2])
      })
      .reverse(true)

      var story2Scene2 = new ScrollMagic.Scene({
        triggerElement: ".section.full-screen.blue", // point of execution
        triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
        offset: 3*window.innerHeight,
        // allows the effect to trigger when scrolled in the reverse direction
      })
        .addTo(controller)
        .on("enter", function(e) {
          s2t1.play();
          s1t2.reverse();
          console.log("start secondtrig");
          e.type=="enter" ? movecamera(...cameraAngles[2]) : movecamera(...cameraAngles[2])
        })
        .on("leave", function(e) {
          // s2t1.play();
          console.log("start firsttrg");
          movecamera(...cameraAngles[2])
        })
        .reverse(true)




const cameraAngles = [
  [8,12,6],[6,16,9],[-8,7,8],[-8,7,8]
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