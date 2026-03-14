import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.152/build/three.module.js";

export function createCube(){

    const geometry = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshStandardMaterial({
        color: 0x00ffff
    });

    const cube = new THREE.Mesh(geometry, material);

    return cube;
}