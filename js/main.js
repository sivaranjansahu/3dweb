var scene = new THREE.Scene(); 
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); 
//var gui = new dat.GUI();
var pillobj;
var renderer = new THREE.WebGLRenderer({ antialias: true,alpha: true  }); 
//renderer.setClearColor (0x173659, 0);
renderer.setClearColor (0xdddddd, 1);
renderer.setSize( window.innerWidth, window.innerHeight ); document.getElementById("threed-holder").appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
var material = new THREE.MeshPhongMaterial( { color: 0x000000 } ); 

var initialCameraPos={
  x:3,y:2,z:3
}

fogColor = new THREE.Color(0xdddddd);
 
//scene.background = fogColor;
scene.fog = new THREE.Fog(fogColor, 0.0025, 40);


//gui.add(initialCameraPos, "x", 0, 5);

 var spotLight = new THREE.SpotLight( 0xffffff ); 
spotLight.position.set( 100, 1000, 100 ); 
spotLight.castShadow = true; 
spotLight.shadowMapWidth = 1024; 
spotLight.shadowMapHeight = 1024; 
spotLight.shadowCameraNear = 500; 
spotLight.shadowCameraFar = 4000; 
spotLight.shadowCameraFov = 30; 

scene.add( spotLight ); 
camera.position.z = 4;
camera.position.x = 16;
camera.position.y = 8;
camera.rotation.x=0;


  // load external geometry
  var loader = new THREE.OBJLoader();
  //var mtlLoader = new THREE.MTLLoader();
  //mtlLoader.load("obj/DNA.mtl")

  loader.load("dna.obj", function(object) {
    pillobj = processObject(object, "Bump.jpg", 0, 0, 0, 0);
    pillobj.position.y = 0;
    scene.add(pillobj);
    
  });
  //var controls = new THREE.OrbitControls(camera, renderer.domElement);
window.scene=scene;





function render() { 
    requestAnimationFrame( render ); 
    if(pillobj){
        pillobj.rotation.x += 0.0002; 
    pillobj.rotation.y += 0.0002;
    pillobj.rotation.z += 0.0002;
    }   
    
    TWEEN.update();
    renderer.render( scene, camera ); 
} 







render();

function update(renderer, scene, camera, controls) {
    renderer.shadowMap.enabled = true;
    //controls.update();
    
    renderer.render(scene, camera);
    

    requestAnimationFrame(function() {
        
      update(renderer, scene, camera, controls);
      
    });
   
  }


function processObject(
    object,
    texture,
    positionx,
    positiony,
    positionz,
    rotation
  ) {
    object.scale = 0.05;
    var textureLoader = new THREE.TextureLoader();
    //var colorMap = textureLoader.load("/assets/textures/yellow.JPG");
    var bumpMap = textureLoader.load(texture);
  //var faceMaterial = getMaterial("standard","rgb(56,131,216)");
  var faceMaterial = getMaterial("standard","rgb(255,255,255)");

    
// colorMap.wrapS = colorMap.wrapT = THREE.RepeatWrapping;
// colorMap.repeat.set(200, 0.8);
//object.material.map = colorMap;
    object.traverse(function(child) {
		console.log("hit");
      if (child instanceof THREE.Mesh) {
        child.scale.set(0.1, 0.1, 0.1);
		const tempGeo = new THREE.Geometry().fromBufferGeometry(child.geometry);
		
        tempGeo.mergeVertices();
        tempGeo.computeVertexNormals();
        tempGeo.computeFaceNormals();
        child.geometry = new THREE.BufferGeometry().fromGeometry(tempGeo);
        child.material = faceMaterial;
        faceMaterial.roughness = 0.82;
        faceMaterial.shininess = 0;
        // faceMaterial.map = colorMap;
        // faceMaterial.envMap = bumpMap ;
        faceMaterial.needsUpdate=true;
        child.castShadow = true;
        faceMaterial.bumpMap = bumpMap;
        // faceMaterial.roughnessMap = bumpMap;
        faceMaterial.metalness = 0.1;
        
        faceMaterial.bumpScale = 1;
      }
      if (child.name == "NurbsPath" || child.name == "Cylinder.001" ) {
        child.visible = false;
      }
      if (child.name == "Infinite") {
      }
    });

    object.scale.x = 20;
    object.scale.y = 20;
    object.scale.z = 20;
  object.rotation.z = rotation;
  object.rotation.y=-2;
	object.position.x = positionx;
    object.position.z = positionz;
    object.position.y = positiony;

    return object;
  }

  function getMaterial(type, color) {
    var selectedMaterial;
    var materialOptions = {
      color: color === undefined ? "rgb(255, 255, 255)" : color
      
    };
  
    switch (type) {
      case "basic":
        selectedMaterial = new THREE.MeshBasicMaterial(materialOptions);
        break;
      case "lambert":
        selectedMaterial = new THREE.MeshLambertMaterial(materialOptions);
        break;
      case "phong":
        selectedMaterial = new THREE.MeshPhongMaterial(materialOptions);
        break;
      case "standard":
        selectedMaterial = new THREE.MeshStandardMaterial(materialOptions);
        break;
      default:
        selectedMaterial = new THREE.MeshBasicMaterial(materialOptions);
        break;
    }
  
    return selectedMaterial;
  }