var bs = require("browser-sync").create();

//тут
bs.watch(['*.*', 'css/*.css']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "."
});