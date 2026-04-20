import {initScenePipelineModule} from './initScenePipelineModule'
const camerafeedHtml = `
  <canvas id="camerafeed"></canvas>
`

const onxrloaded = () => {

  XR8.XrController.configure({
    imageTargetData: [
      require('../image-targets/imagen.json'),
    ],
  })

  XR8.addCameraPipelineModules([
    XR8.GlTextureRenderer.pipelineModule(),
    XR8.Threejs.pipelineModule(),
    XR8.XrController.pipelineModule(),

    // Usa estos solo si tienes los scripts en index.html
    XRExtras.FullWindowCanvas.pipelineModule(),
    XRExtras.Loading.pipelineModule(),
    XRExtras.RuntimeError.pipelineModule(),

    initScenePipelineModule(),
  ])

  document.body.insertAdjacentHTML('beforeend', camerafeedHtml)
  const canvas = document.getElementById('camerafeed')

  XR8.run({
    canvas,
    allowedDevices: XR8.XrConfig.device().ANY,
  })
}

window.XR8 ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded)