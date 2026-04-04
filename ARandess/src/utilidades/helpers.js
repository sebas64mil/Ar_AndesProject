//La siguiente funcion funciona para mantener la posicion de la escena todo 
// el timepo en frente de la camara

export const getForwardPosition = (distance) => {
  const THREE = window.THREE
  const {camera} = XR8.Threejs.xrScene()

  const dir = new THREE.Vector3(0, 0, -1)
  dir.applyQuaternion(camera.quaternion)

  return camera.position.clone().add(dir.multiplyScalar(distance))
}  
