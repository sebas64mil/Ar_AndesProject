// initScenePipelineModule.js

export const initScenePipelineModule = () => {
  let scene
  let camera
  let renderer

  let targetMesh
  let testCube

  return {
    name: 'init-scene',

    onStart: ({ canvas }) => {
      const THREE = window.THREE
      const xrScene = XR8.Threejs.xrScene()

      scene = xrScene.scene
      camera = xrScene.camera
      renderer = xrScene.renderer

      // Luz
      const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1)
      scene.add(light)

      // Grupo que seguira el image target
      targetMesh = new THREE.Group()
      targetMesh.visible = false
      scene.add(targetMesh)

      // Cubo de prueba independiente (NO depende del target)
      const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5)
      const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 })

      testCube = new THREE.Mesh(geometry, material)

      // Frente a la camara
      testCube.position.set(0, 0, -3)

      scene.add(testCube)
    },

    // Cuando detecta la imagen
    onImageFound: (event) => {
      const { detail } = event

      targetMesh.visible = true
      targetMesh.position.copy(detail.position)
      targetMesh.quaternion.copy(detail.rotation)
    },

    // Mientras sigue detectada
    onImageUpdated: (event) => {
      const { detail } = event

      targetMesh.position.copy(detail.position)
      targetMesh.quaternion.copy(detail.rotation)
    },

    // Cuando se pierde la imagen
    onImageLost: () => {
      targetMesh.visible = false
    },

    // Loop de actualizacion
    onUpdate: () => {
      if (testCube) {
        testCube.rotation.y += 0.05
      }
    },
  }
}