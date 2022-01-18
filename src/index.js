import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

//https://threejs.org/examples/#webgl_loader_gltf
//https://threejs.org/editor/

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xbfe3dd );

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const light = new THREE.AmbientLight( 0x404040 , 4); // soft white light
scene.add( light );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshLambertMaterial( {color: 0xffffff} );
const cube = new THREE.Mesh( geometry, material );
//scene.add( cube );
//camera.position.z = 5;
camera.position.set( 5, 2, 8 );

renderer.render( scene, camera );


const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/'); // use a full url path
loader.setDRACOLoader(dracoLoader);

loader.load( 'cactus.gltf', function ( gltf ) {

	const model = gltf.scene;
	//model.position.set( 0, 0, 0 );
	
	//https://threejs.org/docs/#api/en/loaders/TextureLoader
	
	model.scale.set( 10, 10, 10 );
	scene.add( model );
	console.log('added');
	renderer.render(scene,camera);

}, undefined, function ( error ) {
	
	console.error( error );

} );

/*
loader.load( 'Cactus3.glb', function ( gltf ) {

	const model = gltf.scene;
	//model.position.set( 0, 0, 0 );

	scene.add( model );
	console.log('added');
	renderer.render(scene,camera);

}, undefined, function ( error ) {
	
	console.error( error );

} );

// instantiate a loader
const objLoader = new OBJLoader();

// load a resource
objLoader.load(
	// resource URL
	'cactus2.obj',
	// called when resource is loaded
	function ( object ) {

		object.position.set( 0, 0, 0 );

		scene.add( object );
		renderer.render(scene,camera);
		console.log('loaded obj');

	},
	// called when loading is in progresses
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);
*/