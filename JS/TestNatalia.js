  import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';
  import { MindARThree } from 'https://cdn.jsdelivr.net/npm/mind-ar@1.2.5/dist/mindar-image-three.prod.js';

  const container = document.querySelector('#ar-container');
  const startButton = document.querySelector('#start-ar');
  const stopButton = document.querySelector('#stop-ar');
  const statusText = document.querySelector('#status-text');

const uiLoading = document.querySelector("#ui-loading");
const uiCamera = document.querySelector("#ui-camera");
const uiScanning = document.querySelector("#ui-scanning");
const uiDetected = document.querySelector("#ui-detected");

uiLoading.style.display = "block";
uiCamera.style.display = "none";
uiScanning.style.display = "none";
uiDetected.style.display = "none";

  let started = false;
  let mindarThree;
  let renderer;
  let scene;
  let camera;
  let previewGroup;
  let sceneReady = false;

  const updateStatus = (message) => {
    statusText.textContent = message;
  };

  const createPreviewObject = () => {
    const group = new THREE.Group();

    const baseMaterial = new THREE.MeshStandardMaterial({
      color: 0xff7a18,
      metalness: 0.25,
      roughness: 0.35,
    });

    const secondaryMaterial = new THREE.MeshStandardMaterial({
      color: 0x1f7a8c,
      metalness: 0.1,
      roughness: 0.5,
    });

    const cube = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), baseMaterial);
    cube.position.set(0, 0.3, 0);

    const torus = new THREE.Mesh(
      new THREE.TorusKnotGeometry(0.16, 0.05, 96, 16),
      secondaryMaterial,
    );
    torus.position.set(0, 0.8, 0);
    torus.scale.setScalar(0.8);

    const floor = new THREE.Mesh(
      new THREE.CylinderGeometry(0.6, 0.7, 0.1, 32),
      new THREE.MeshStandardMaterial({ color: 0xf5f0e1, roughness: 0.9 }),
    );
    floor.position.set(0, -0.05, 0);

    group.add(cube, torus, floor);
    group.scale.setScalar(0.6);

    return { group, cube, torus };
  };

  const setupScene = () => {
    if (sceneReady) {
      return;
    }

    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x7a8ca5, 1.4);
    scene.add(hemisphereLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(1, 2, 1.5);
    scene.add(directionalLight);

    const anchor = mindarThree.addAnchor(0);


  anchor.onTargetFound = () => {
    uiScanning.style.display = "none";
    uiDetected.style.display = "block";
  };

  anchor.onTargetLost = () => {
    uiDetected.style.display = "none";
    uiScanning.style.display = "block";
  };

    const preview = createPreviewObject();
    previewGroup = preview;
    anchor.group.add(preview.group);
    sceneReady = true;
  };

  const stopAR = () => {
    if (!started || !mindarThree) {
      return;
    }

    renderer.setAnimationLoop(null);
    mindarThree.stop();
    started = false;
    startButton.disabled = false;
    stopButton.disabled = true;

    // resetear UI
  uiScanning.style.display = "none";
  uiDetected.style.display = "none";
  uiCamera.style.display = "none";
  uiLoading.style.display = "block";
  
    updateStatus('Camara detenida.');
  };

  const startAR = async () => {
    if (started) {
      return;
    }

    startButton.disabled = true;
    stopButton.disabled = true;
    updateStatus('Solicitando acceso a la camara...');
    uiLoading.style.display = "none";
    uiCamera.style.display = "block";

    try {
      if (!mindarThree) {
        mindarThree = new MindARThree({
        container,
        imageTargetSrc: '../Assets/Targets/targets2.mind',
        uiScanning: false,
        uiLoading: false,
        maxTrack: 1,
        filterMinCF: 0.0001,
        filterBeta: 0.01,
      });

      ({ renderer, scene, camera } = mindarThree);
      setupScene();
    }

    await mindarThree.start();
    uiCamera.style.display = "none";
    uiScanning.style.display = "block";
    updateStatus('Buscando imagen objetivo...');
    started = true;
    stopButton.disabled = false;
    //updateStatus('Camara activa. Apunta al target para ver el objeto.');

    renderer.setAnimationLoop(() => {
      if (!started) {
        return;
      }

        previewGroup.cube.rotation.x += 0.01;
        previewGroup.cube.rotation.y += 0.02;
        previewGroup.torus.rotation.x -= 0.015;
        previewGroup.torus.rotation.z += 0.02;
        renderer.render(scene, camera);
    });
    } catch (error) {
      console.error(error);
      updateStatus('No se pudo iniciar. Usa localhost y acepta permisos de camara.');
      startButton.disabled = false;
      stopButton.disabled = true;
    }
  };

  startButton.addEventListener('click', () => {
    startAR();
  });

  stopButton.addEventListener('click', () => {
    stopAR();
  });

  stopButton.disabled = true;
