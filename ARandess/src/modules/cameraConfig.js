export const cameraConfigModule = () => {
  return {
    name: 'camera-config',

    onStart: () => {
      const {camera, renderer} = XR8.Threejs.xrScene()

      const update = () => {
        const w = window.innerWidth
        const h = window.innerHeight

        camera.aspect = w / h
        camera.fov = 70
        camera.updateProjectionMatrix()

        renderer.setSize(w, h)
        renderer.setPixelRatio(window.devicePixelRatio)
      }

      update()
      window.addEventListener('resize', update)
    },
  }
}