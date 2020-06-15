var bgcolor = "#151e24";
var modelColor = "#A8AE3D";

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);
//camera.zoom = 3;
//var gui = new dat.GUI();
var pillobj;
var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setClearColor(bgcolor, 1);
renderer.setSize(window.innerWidth, window.innerHeight); document.getElementById("threed-holder").appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshPhongMaterial({ color: 0x000000 });

var initialCameraPos = {
  x: 1, y: 1, z: 1
}



//scene.background = fogColor;
fogColor = new THREE.Color(0x151e24);
scene.fog = new THREE.Fog(fogColor, 0.0025, 40);



var spotLight = new THREE.SpotLight(0xffffff);
// spotLight.position.set(100, 1000, 100);
// spotLight.castShadow = true;
// spotLight.shadowMapWidth = 1024;
// spotLight.shadowMapHeight = 1024;
// spotLight.shadowCameraNear = 500;
// spotLight.shadowCameraFar = 4000;
// spotLight.shadowCameraFov = 30;

//scene.add(spotLight);
camera.position.z = 20;
camera.position.x = -4;
camera.position.y = -4;
camera.rotation.x = 0;


// load external geometry
var loader = new THREE.OBJLoader();
//var mtlLoader = new THREE.MTLLoader();
//let modelObj = "assets/models/speaker.obj";
let modelObj = "assets/models/cockroach.obj";
//let modelObj = "virus.obj";
loader.load(modelObj, function (object) {
  pillobj = processObject(object, "Bump.jpg", modelColor, 0.8);
  pillobj.position.y = -5;
  scene.add(pillobj);

});
//var controls = new THREE.OrbitControls(camera, renderer.domElement);
window.scene = scene;





function render() {
  requestAnimationFrame(render);
  if (pillobj) {
    pillobj.rotation.x += 0.0002;
    pillobj.rotation.y += 0.0002;
    pillobj.rotation.z += 0.0002;
  }

  //TWEEN.update();
  renderer.render(scene, camera);
}







render();

function update(renderer, scene, camera, controls) {
  renderer.shadowMap.enabled = true;
  //controls.update();

  renderer.render(scene, camera);


  requestAnimationFrame(function () {

    update(renderer, scene, camera, controls);

  });

}


function processObject(
  object,
  texture,
  modelColor,
  scale
) {
  object.scale = 0.05;
  var textureLoader = new THREE.TextureLoader();
  //var colorMap = textureLoader.load("/assets/textures/yellow.JPG");
  var bumpMap = textureLoader.load(texture);
  //var faceMaterial = getMaterial("standard","rgb(56,131,216)");
  var faceMaterial = getMaterial("basic", modelColor);


  object.traverse(function (child) {
    console.log("hit");
    if (child instanceof THREE.Mesh) {
      //child.scale.set(0.1, 0.1, 0.1);
      const tempGeo = new THREE.Geometry().fromBufferGeometry(child.geometry);

      child.geometry = new THREE.BufferGeometry().fromGeometry(tempGeo);
      child.material = faceMaterial;
      faceMaterial.shininess = 0;
      faceMaterial.needsUpdate = true;
      child.castShadow = true;
      faceMaterial.bumpMap = bumpMap;
      faceMaterial.metalness = 0.1;
      faceMaterial.wireframe = true;
      faceMaterial.bumpScale = 0;
    }
    if (child.name == "NurbsPath" || child.name == "Cylinder.001") {
      child.visible = false;
    }
    if (child.name == "Infinite") {
    }
  });

  object.scale.x = scale;
  object.scale.y = scale;
  object.scale.z = scale;
  //object.rotation.z = rotation;
  object.rotation.x = 0;

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

const grid = `

<div></div>
<div>
  <div class="circle  circle-ver"></div>
</div>
<div>
  <div class="stripebg"></div>
</div>
<div></div>
<div>
  <div class="circle  circle-ver"></div>
</div>
<div>
  <div class="stripebg"></div>
</div>
<div>
  <div class="circle circle-hor"></div>
</div>

<div></div>
<div>
  <div class="circle  circle-ver"></div>
</div>
<div>
  <div class="circle circle-hor"></div>
</div>
<div>
  <div class="stripebg"></div>
</div>
<div>
  <div class="circle  circle-ver"></div>
</div>
<div>
  <div class="stripebg"></div>
</div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div>
  <div class="circle  circle-ver"></div>
</div>
<div>
  <div class="stripebg"></div>
</div>
<div>
  <div class="circle circle-hor"></div>
</div>
<div></div>
<div>
  <div class="stripebg"></div>
  <div class="circle circle-hor"></div>
</div>
<div></div>
<div></div>
<div>
  <div class="stripebg"></div>
</div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div>
  <div class="stripebg"></div>
</div>
<div>
  <div class="circle  circle-ver"></div>
</div>
<div></div>
<div>
  <div class="stripebg"></div>
  <div class="circle circle-hor"></div>
</div>
<div>
  <div class="circle  circle-ver"></div>
</div>
<div></div>
<div>
  <div class="circle circle-hor"></div>
</div>
<div></div>
<div>
  <div class="circle  circle-ver"></div>
</div>
<div></div>
<div>
  <div class="circle  circle-ver"></div>
</div>
<div></div>
<div>
  <div class="circle circle-hor"></div>
</div>
<div></div>
`

document.querySelector('.grid').innerHTML = grid;
TweenMax.staggerTo(".circle-ver", 20, { top: 1200, yoyo: true, repeat: -1 }, 4)
TweenMax.staggerTo(".circle-hor", 20, { left: 1600, yoyo: true, repeat: -1 }, 4)