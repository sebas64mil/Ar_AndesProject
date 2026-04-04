import { cameraConfigModule } from './modules/cameraConfig.js'
import { sceneModule } from './modules/sceneManager.js'
import { interactionModule } from './modules/interaction.js'

window.XR8 ? startXR() : window.addEventListener('xrloaded', startXR)

function startXR() {
  XR8.addCameraPipelineModules([
    XR8.CameraPixelArray.pipelineModule(),
    XR8.GlTextureRenderer.pipelineModule(),
    XR8.Threejs.pipelineModule(),
    XR8.XrController.pipelineModule(),

    cameraConfigModule(),
    sceneModule(),
    interactionModule(),
  ])

  XR8.run({
    canvas: document.getElementById('camerafeed'),
  })
}