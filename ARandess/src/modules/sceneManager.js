import { createCube } from '../objetos/objects.js'

const THREE = window.THREE

export let root = new THREE.Group()

export const sceneModule = () => {
  return {
    name: 'scene-module',

    onStart: () => {
      const {scene} = XR8.Threejs.xrScene()

      scene.add(root)
/*
      const cube = createCube()
      cube.position.set(0, 0, 0)

      root.add(cube)
*/
      const grid = new THREE.GridHelper(1000, 10)
      grid.position.set(0, -500, 0)
      root.add(grid)

    },
  }
}