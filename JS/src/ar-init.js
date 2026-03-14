import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.152/build/three.module.js";
import { MindARThree } from "https://cdn.jsdelivr.net/npm/mind-ar/dist/mindar-image-three.prod.js";

export async function initAR(container, targetFile){

    const mindarThree = new MindARThree({
        container: container,
        imageTargetSrc: targetFile
    });

    const {renderer, scene, camera} = mindarThree;

    const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
    scene.add(light);

    await mindarThree.start();

    renderer.setAnimationLoop(()=>{
        renderer.render(scene, camera);
    });

    return {
        mindarThree,
        renderer,
        scene,
        camera
    };
}