const express = require("express");
const app = express();
const colors = require("colors");
require("./routes")(app)
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/home.json') /* Crearemos luego el home.json */
})
app.listen(5000, () => {
  console.log("API esta bien, creo  :D".cyan)
})
