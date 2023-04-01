import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const canvas =document.querySelector('.webgl')
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(1,2,5)
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
  antialias:true,
  canvas:canvas
})

// renderer.setSize( window.200px, window.innerHeight )
renderer.shadowMap.enabled=true
renderer.setPixelRatio(Math.min(devicePixelRatio,2));
renderer.gammaOutput=true

// document.body.appendChild( renderer.domElement );





// const loader = new GLTFLoader();
// loader.load( 'assets/wraith.glb', function ( glb ) {
//   console.log(glb) ;
//   const root =( glb.scene );
//   scene.add(root);
//   glb.scene.rotation.y = -Math.PI / 20;
  
//   root.scale.set(0.023,0.023,0.023)
// }, undefined, function ( error ) {
//   console.error( error );
// } );


const texture= new THREE.TextureLoader().load('textures/crop.jpeg');
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { map: texture } );
const cube = new THREE.Mesh( geometry, material );
cube.scale.set(1.8,1.8,1.8 )
cube.castShadow=true
scene.add( cube );



const light =new THREE.DirectionalLight(0xffffff,1)
light.position.set(2,2,5)
scene.add(light)







function animate() {
	requestAnimationFrame( animate );
  renderer.render( scene, camera );
  
  }
  animate();

window.onresize = function(e){
  camera.aspect =window.innerWidth/window.innerHeight
  camera.updateProjectionMatrix
  renderer.setSize(window.innerWidth,window.innerHeight)
}

window.addEventListener('resize',onresize,false)

let oldx = 0
let oldy = 0

window.onmousemove =function(ev){
  // let changex = ev.x - oldx
  // let changey = ev.x - oldy


  // camera.rotation.x += changex/10000
  // camera.rotation.y -= changey/10000
  // oldx = ev.x
  // oldy = ev.y
  
  cube.rotation.x+=0.03
  cube.rotation.y+=0.03
  cube.rotation.z+=0.03


}
