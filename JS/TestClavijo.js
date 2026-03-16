import * as THREE from 'three';
import Stats from 'three/addons/libs/stats.module.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

let stats;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

stats = new Stats();
document.body.appendChild(stats.dom);

camera.position.z = 5;

const params = {
  visible: true,
  wireframe: false,
  speed: 1
};

createPanel();

function createPanel() {

  const panel = new GUI({ width: 310 });

  const folder1 = panel.addFolder('Visibility');
  folder1.add(params, 'visible').onChange(v => cube.visible = v);

  const folder2 = panel.addFolder('Activation/Deactivation');
  folder2.add(material, 'wireframe');

  const folder3 = panel.addFolder('General Speed');
  folder3.add(params, 'speed', 0, 5, 0.1);

}

function animate(time) {

  cube.rotation.x = (time / 2000) * params.speed;
  cube.rotation.y = (time / 1000) * params.speed;

  renderer.render(scene, camera);
  stats.update();

}
