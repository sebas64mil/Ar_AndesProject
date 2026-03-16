import * as THREE from "https://unpkg.com/three@0.160.0/build/three.module.js";

/**
 * Cambia el color de un objeto 3D
 * @param {THREE.Mesh} object - El objeto a modificar
 * @param {number} colorHex - Color en formato hexadecimal (ej: 0xff0000)
 */
export function changeColor(object, colorHex) {
  if (object && object.material) {
    object.material.color.setHex(colorHex);
  }
}

/**
 * Cambia la escala de un objeto 3D
 * @param {THREE.Mesh} object - El objeto a modificar
 * @param {number} scaleValue - Valor de escala (ej: 1.5 para 150%)
 */
export function changeScale(object, scaleValue) {
  if (object) {
    object.scale.setScalar(scaleValue);
  }
}

/**
 * Agrega una animación de pulso al objeto
 * @param {THREE.Mesh} object - El objeto a animar
 * @param {number} duration - Duración de la animación en milisegundos
 * @returns {Function} Función para limpiar la animación
 */
export function addPulseAnimation(object, duration = 500) {
  if (!object) return () => {};

  const originalScale = object.scale.clone();
  const startTime = Date.now();
  const animationId = {};

  const animate = () => {
    const elapsed = Date.now() - startTime;
    const progress = (elapsed % duration) / duration;
    const scale = 1 + Math.sin(progress * Math.PI * 2) * 0.3;
    
    object.scale.copy(originalScale).multiplyScalar(scale);
    animationId.id = requestAnimationFrame(animate);
  };

  animationId.id = requestAnimationFrame(animate);

  return () => {
    cancelAnimationFrame(animationId.id);
    object.scale.copy(originalScale);
  };
}

/**
 * Agrega una animación de rotación al objeto
 * @param {THREE.Mesh} object - El objeto a animar
 * @param {number} speed - Velocidad de rotación
 * @returns {Function} Función para limpiar la animación
 */
export function addRotationAnimation(object, speed = 0.05) {
  if (!object) return () => {};

  const originalRotation = object.rotation.clone();
  const animationId = {};
  let isActive = true;

  const animate = () => {
    if (isActive) {
      object.rotation.x += speed;
      object.rotation.y += speed * 0.8;
      animationId.id = requestAnimationFrame(animate);
    }
  };

  animationId.id = requestAnimationFrame(animate);

  return () => {
    isActive = false;
    cancelAnimationFrame(animationId.id);
    object.rotation.copy(originalRotation);
  };
}

/**
 * Agrega una animación de movimiento hacia arriba y abajo
 * @param {THREE.Mesh} object - El objeto a animar
 * @param {number} height - Altura del movimiento
 * @returns {Function} Función para limpiar la animación
 */
export function addBounceAnimation(object, height = 0.3) {
  if (!object) return () => {};

  const originalY = object.position.y;
  const startTime = Date.now();
  const duration = 1000;
  const animationId = {};

  const animate = () => {
    const elapsed = Date.now() - startTime;
    const progress = (elapsed % duration) / duration;
    const bounce = Math.abs(Math.sin(progress * Math.PI)) * height;
    
    object.position.y = originalY + bounce;
    animationId.id = requestAnimationFrame(animate);
  };

  animationId.id = requestAnimationFrame(animate);

  return () => {
    cancelAnimationFrame(animationId.id);
    object.position.y = originalY;
  };
}

/**
 * Detiene todas las animaciones de un objeto
 * @param {Function[]} animations - Array de funciones de limpieza de animaciones
 */
export function stopAllAnimations(animations) {
  animations.forEach(cleanup => {
    if (typeof cleanup === 'function') {
      cleanup();
    }
  });
}
