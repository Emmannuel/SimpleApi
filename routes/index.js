const fs = require("fs")
const colors = require("colors");
module.exports = function (app){
  fs.readdirSync(__dirname).forEach(function(file){
    if (file === "index.js") return;
    let name = file.substr(0, file.indexOf("."));
    const route = require(`./${name}`);
    app.get(`/${route.name}`, async (req, res) => { /* Imprimira todas las request en la consola */
      console.log(req.url.blue);
      route.run(req, res);
    });
  })
};
