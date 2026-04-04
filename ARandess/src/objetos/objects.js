import { root } from "../modules/sceneManager"

const THREE = window.THREE

/*
export const gridHelper = () => {
  const size = 10;
  const divisions = 10;
  const gridHelper = new THREE.GridHelper( size, divisions );

  return gridHelper
} */


export const createCube = () => {
  const geo = new THREE.BoxGeometry(100, 100, 100)
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff })

  const cube = new THREE.Mesh(geo, mat)

  return cube
}