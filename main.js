//initialize scene
var scene = new THREE.Scene();

//initialize camer
var camera = new THREE.PerspectiveCamera (75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
//initialize renderer
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);

//append renderer to browser
document.body.appendChild(renderer.domElement);


//dynamically adjust camera and renderer values based on screen size
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
});



var geometry  = new THREE.SphereGeometry(1, 10, 10);
var material = new THREE.MeshLambertMaterial({color : 0xFFCC00});
var mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

var light = new THREE.PointLight(0xFFFFFF, 1, 500);
light.position.set(10, 0, 25);
scene.add(light);


var render = function() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

render();
