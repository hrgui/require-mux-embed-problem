const root = document.getElementById("root");

window.addEventListener("error", (e) => {
  //console.error(e);
  root.innerHTML = "Could not require('mux-embed'), encountered this error: " + e.error.stack;
});

//document.write('importing mux-embed via require("mux-embed")...');
root.innerHTML = "Trying to do require('mux-embed')";
require("mux-embed");
root.innerHTML = "SUCCESS!";
//document.write("SUCCESS");
