import { initAR } from "./ar/initAR.js";
import { createCube } from "./scene/sceneSetup.js";
import { createPerformancePanel } from "./utils/performance.js";

async function start(){

    const container = document.querySelector("#ar-container");

    const ar = await initAR(container, "./assets/targets/targets.mind");

    const cube = createCube();

    const anchor = ar.mindarThree.addAnchor(0);
    anchor.group.add(cube);

    createPerformancePanel();
}

start();