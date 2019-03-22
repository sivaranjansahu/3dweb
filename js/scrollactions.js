// init ScrollMagic Controller
var controller = new ScrollMagic.Controller();

// Scene Handler

var scene2 = new ScrollMagic.Scene({
    triggerElement: ".full-screen.blue", // point of execution
    duration: window.innerHeight + 1500, // pin element for the window height - 1
    triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
    reverse: true // allows the effect to trigger when scrolled in the reverse direction
})
.addTo(controller)
.on("enter",function(){
    console.log("entered")
})
.on("start",function(){
  console.log("start")
})
.on("update",function(){
  console.log("update")
})

.on("start",function(){
  // camera.position.x =14;
  // camera.position.y =3.4;
  // camera.position.z =-8;
console.log("started")
  
  
})



var scene1 = new ScrollMagic.Scene({
    triggerElement: ".full-screen.green", // point of execution
    duration: window.innerHeight + 1500, // pin element for the window height - 1
    triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
    reverse: true // allows the effect to trigger when scrolled in the reverse direction
  })
  .setPin(".full-screen.blue") // the element we want to pin
  .addTo(controller)
  .on("progress",function(e){
      //console.log(e);
      if(e.scrollDirection=="REVERSE"){
        pillobj.rotation.x -= 0.002; 
    pillobj.rotation.y -= 0.002;
    camera.rotation.y -=0.5;
      }else{
        pillobj.rotation.x += 0.002; 
        pillobj.rotation.y += 0.002;
        camera.rotation.x +=0.5;
      }
      camera.lookAt(new THREE.Vector3(0,0,0));
      
  })
 

    var from = {
        x : camera.position.x,
        y : camera.position.y,
        z : camera.position.z
      };
    
      var to = {
        x : -10,
        y : 12,
        z : 8
      };
      var tween =  new TWEEN.Tween(from)
      .to(to,600)
      .easing(TWEEN.Easing.Linear.None)
      .onUpdate(function () {
        camera.position.set(this.x + 10, this.y+ 10, this.z+ 10);
        camera.lookAt(new THREE.Vector3(0,0,0));
      })
      .onComplete(function () {
        camera.lookAt(new THREE.Vector3(0,0,0));
        console.log("yo")
      })
      .start();
  
 