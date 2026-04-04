import { root } from './sceneManager'

export const interactionModule = () => {
  let placed = false

  return {
    name: 'interaction-module',

    onStart: () => {
      const THREE = window.THREE

      window.addEventListener('touchstart', () => {
        if (placed) return

        const {camera} = XR8.Threejs.xrScene()

        const direction = new THREE.Vector3(0, 0, -1)
        direction.applyQuaternion(camera.quaternion)

        const position = camera.position.clone().add(direction.multiplyScalar(2))

        root.position.copy(position)

        placed = true
      })
    },
  }
}