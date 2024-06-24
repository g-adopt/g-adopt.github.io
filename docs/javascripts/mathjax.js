window.MathJax = {
  loader: {load: ["input/asciimath", "output/svg", "output/chtml"]},
  asciimath: {
    delimiters: [["\\(", "\\)"], ["\\[", "\\]"]]
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

document$.subscribe(() => {
  MathJax.startup.output.clearCache()
  MathJax.typesetClear()
  MathJax.texReset()
  MathJax.typesetPromise()
})
