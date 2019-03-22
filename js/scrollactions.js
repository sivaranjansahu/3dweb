// init ScrollMagic Controller
var controller = new ScrollMagic.Controller();

// Scene Handler
var scene1 = new ScrollMagic.Scene({
    triggerElement: "body", // point of execution
    duration: window.innerHeight + 1500, // pin element for the window height - 1
    triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
    reverse: true // allows the effect to trigger when scrolled in the reverse direction
  })
  .setPin(".full-screen.blue") // the element we want to pin
  .addTo(controller)
  .on("progress",function(e){
      console.log(e);
      if(e.scrollDirection=="REVERSE"){
    //     pillobj.rotation.x -= 0.002; 
    // pillobj.rotation.y -= 0.002;
    camera.rotation.y -=0.5;
      }else{
        // pillobj.rotation.x += 0.002; 
        // pillobj.rotation.y += 0.002;
        camera.rotation.x +=0.5;
      }
      camera.lookAt(new THREE.Vector3(0,0,0));
      
  })