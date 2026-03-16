  import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';
  import { MindARThree } from 'https://cdn.jsdelivr.net/npm/mind-ar@1.2.5/dist/mindar-image-three.prod.js';
  import { 
    changeColor, 
    changeScale, 
    addPulseAnimation, 
    addRotationAnimation, 
    addBounceAnimation, 
    stopAllAnimations 
  } from '../JS/src/effects.js';

  const container = document.querySelector('#ar-container');
  const startButton = document.querySelector('#start-ar');
  const stopButton = document.querySelector('#stop-ar');
  const statusText = document.querySelector('#status-text');

  let started = false;
  let mindarThree;
  let renderer;
  let scene;
  let camera;
  let previewGroup;
  let sceneReady = false;
  
  // Tracking de animaciones activas
  const cubeAnimations = [];
  const torusAnimations = [];
  
  // Colores disponibles para cambiar
  const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff, 0x00ffff, 0xffa500, 0x800080];
  let cubeColorIndex = 0;
  let torusColorIndex = 0;
  
  // Escalas para el efecto
  const scales = [0.5, 1, 1.5, 2];
  let cubeScaleIndex = 0;
  let torusScaleIndex = 0;

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
    const preview = createPreviewObject();
    previewGroup = preview;
    anchor.group.add(preview.group);
    sceneReady = true;
  };

  // Funciones para controlar el cubo
  const applyCubeEffect = (effectType) => {
    if (!previewGroup || !previewGroup.cube) return;
    
    switch(effectType) {
      case 'color':
        cubeColorIndex = (cubeColorIndex + 1) % colors.length;
        changeColor(previewGroup.cube, colors[cubeColorIndex]);
        updateStatus(`Cubo: Color cambiado a #${colors[cubeColorIndex].toString(16)}`);
        break;
      case 'pulse':
        stopAllAnimations(cubeAnimations);
        cubeAnimations.length = 0;
        cubeAnimations.push(addPulseAnimation(previewGroup.cube, 500));
        updateStatus('Cubo: Animación de pulso activa');
        break;
      case 'rotate':
        stopAllAnimations(cubeAnimations);
        cubeAnimations.length = 0;
        cubeAnimations.push(addRotationAnimation(previewGroup.cube, 0.08));
        updateStatus('Cubo: Rotación rápida activa');
        break;
      case 'bounce':
        stopAllAnimations(cubeAnimations);
        cubeAnimations.length = 0;
        cubeAnimations.push(addBounceAnimation(previewGroup.cube, 0.4));
        updateStatus('Cubo: Rebote activo');
        break;
      case 'scale':
        cubeScaleIndex = (cubeScaleIndex + 1) % scales.length;
        changeScale(previewGroup.cube, scales[cubeScaleIndex]);
        updateStatus(`Cubo: Escala ${scales[cubeScaleIndex]}x`);
        break;
      case 'reset':
        stopAllAnimations(cubeAnimations);
        cubeAnimations.length = 0;
        changeColor(previewGroup.cube, 0xff7a18);
        changeScale(previewGroup.cube, 1);
        cubeColorIndex = 0;
        cubeScaleIndex = 0;
        updateStatus('Cubo: Reseteado');
        break;
    }
  };

  // Funciones para controlar el toroide
  const applyTorusEffect = (effectType) => {
    if (!previewGroup || !previewGroup.torus) return;
    
    switch(effectType) {
      case 'color':
        torusColorIndex = (torusColorIndex + 1) % colors.length;
        changeColor(previewGroup.torus, colors[torusColorIndex]);
        updateStatus(`Toroide: Color cambiado a #${colors[torusColorIndex].toString(16)}`);
        break;
      case 'pulse':
        stopAllAnimations(torusAnimations);
        torusAnimations.length = 0;
        torusAnimations.push(addPulseAnimation(previewGroup.torus, 500));
        updateStatus('Toroide: Animación de pulso activa');
        break;
      case 'rotate':
        stopAllAnimations(torusAnimations);
        torusAnimations.length = 0;
        torusAnimations.push(addRotationAnimation(previewGroup.torus, 0.08));
        updateStatus('Toroide: Rotación rápida activa');
        break;
      case 'bounce':
        stopAllAnimations(torusAnimations);
        torusAnimations.length = 0;
        torusAnimations.push(addBounceAnimation(previewGroup.torus, 0.4));
        updateStatus('Toroide: Rebote activo');
        break;
      case 'scale':
        torusScaleIndex = (torusScaleIndex + 1) % scales.length;
        changeScale(previewGroup.torus, scales[torusScaleIndex]);
        updateStatus(`Toroide: Escala ${scales[torusScaleIndex]}x`);
        break;
      case 'reset':
        stopAllAnimations(torusAnimations);
        torusAnimations.length = 0;
        changeColor(previewGroup.torus, 0x1f7a8c);
        changeScale(previewGroup.torus, 0.8);
        torusColorIndex = 0;
        torusScaleIndex = 0;
        updateStatus('Toroide: Reseteado');
        break;
    }
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
    stopAllAnimations([...cubeAnimations, ...torusAnimations]);
    cubeAnimations.length = 0;
    torusAnimations.length = 0;
    updateStatus('Camara detenida.');
  };

  const startAR = async () => {
    if (started) {
      return;
    }

    startButton.disabled = true;
    stopButton.disabled = true;
    updateStatus('Solicitando acceso a la camara...');

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
    started = true;
    stopButton.disabled = false;
    updateStatus('Camara activa. Apunta al target para ver el objeto.');

    renderer.setAnimationLoop(() => {
      if (!started) {
        return;
      }
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

  // Event listeners para efectos del cubo
  document.querySelector('#cube-color').addEventListener('click', () => applyCubeEffect('color'));
  document.querySelector('#cube-pulse').addEventListener('click', () => applyCubeEffect('pulse'));
  document.querySelector('#cube-rotate').addEventListener('click', () => applyCubeEffect('rotate'));
  document.querySelector('#cube-bounce').addEventListener('click', () => applyCubeEffect('bounce'));
  document.querySelector('#cube-scale').addEventListener('click', () => applyCubeEffect('scale'));
  document.querySelector('#cube-reset').addEventListener('click', () => applyCubeEffect('reset'));

  // Event listeners para efectos del toroide
  document.querySelector('#torus-color').addEventListener('click', () => applyTorusEffect('color'));
  document.querySelector('#torus-pulse').addEventListener('click', () => applyTorusEffect('pulse'));
  document.querySelector('#torus-rotate').addEventListener('click', () => applyTorusEffect('rotate'));
  document.querySelector('#torus-bounce').addEventListener('click', () => applyTorusEffect('bounce'));
  document.querySelector('#torus-scale').addEventListener('click', () => applyTorusEffect('scale'));
  document.querySelector('#torus-reset').addEventListener('click', () => applyTorusEffect('reset'));

  stopButton.disabled = true;
