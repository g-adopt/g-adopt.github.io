const vtkjs = window.vtkjs;

// Load the rendering pieces we want to use (for both WebGL and WebGPU)
//import "vtkjs/Rendering/Profiles/All";

// Force DataAccessHelper to have access to various data source
//import "@kitware/vtk.js/IO/Core/DataAccessHelper/HtmlDataAccessHelper";
//import "@kitware/vtk.js/IO/Core/DataAccessHelper/HttpDataAccessHelper";
//import "@kitware/vtk.js/IO/Core/DataAccessHelper/JSZipDataAccessHelper";

//import vtkFullScreenRenderWindow from "@kitware/vtk.js/Rendering/Misc/FullScreenRenderWindow";
//import vtkHttpSceneLoader from "@kitware/vtk.js/IO/Core/HttpSceneLoader";

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

downloadZipFile("test4.vtkjs").then((zipContent) => {
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
        //        if (animationHandler && animationHandler.getTimeSteps().length > 1) {
        //          const steps = animationHandler.getTimeSteps();
        //          const applyStep = (stepIdx) => {
        //            const step = steps[stepIdx];
        //            if (
        //              step >= animationHandler.getTimeRange()[0] &&
        //              step <= animationHandler.getTimeRange()[1]
        //            ) {
        //              animationHandler.setCurrentTimeStep(step);
        //              renderer.resetCameraClippingRange();
        //              renderWindow.render();
        //            }
        //          };
        //          initialiseSelector(steps, applyStep);
        //        }
        renderWindow.render();
      });
    },
  });
});
