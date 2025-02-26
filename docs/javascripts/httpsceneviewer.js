const vtkjs = window.vtkjs;

// ----------------------------------------------------------------------------
// Standard rendering code setup
// ----------------------------------------------------------------------------

const fullScreenRenderer =
  vtk.Rendering.Misc.vtkFullScreenRenderWindow.newInstance();
const renderer = fullScreenRenderer.getRenderer();
const renderWindow = fullScreenRenderer.getRenderWindow();

// ----------------------------------------------------------------------------
// Example code
// ----------------------------------------------------------------------------
const controlPanel = `
<button id="btn">Play/Pause</button>
`;

function initialiseAnim(nextStep) {
  let interval = setInterval(nextStep,100);
  const select = document.getElementById('btn');
  select.addEventListener('click', () => {
    if ( interval == null ) {
      interval = setInterval(nextStep,100);
    } else {
      clearInterval(interval);
      interval = null;
    }
  });
};

function downloadZipFile(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = (e) => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200 || xhr.status === 0) {
          resolve(xhr.response);
        } else {
          reject(xhr, e);
        }
      }
    };

    // Make request
    xhr.open("GET", url, true);
    xhr.responseType = "arraybuffer";
    xhr.send();
  });
}

downloadZipFile("https://data.gadopt.org/website/frontpage_model.vtkjs").then((zipContent) => {
  const dataAccessHelper = vtk.IO.Core.DataAccessHelper.get("zip", {
    zipContent,
    callback() {
      const sceneImporter = vtk.IO.Core.vtkHttpSceneLoader.newInstance({
        dataAccessHelper,
        renderer,
      });

      sceneImporter.setUrl("index.json");
      sceneImporter.onReady(() => {
        const animationHandler = sceneImporter.getAnimationHandler();
        if (animationHandler && animationHandler.getTimeSteps().length > 1) {
          const steps = animationHandler.getTimeSteps();
          const nextStep = () => {
            global_step =
              (global_step + 1) % animationHandler.getTimeSteps().length;
            const step = steps[global_step];
            animationHandler.setCurrentTimeStep(step);
            renderer.resetCameraClippingRange();
            renderWindow.render();
          };
          initialiseAnim(nextStep)
        }
        renderWindow.render();
      });
    },
  });
});

var global_step = 0;
fullScreenRenderer.addController(controlPanel);