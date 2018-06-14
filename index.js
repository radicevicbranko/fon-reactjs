const express = require("express");
const path = require("path");
const app = express();
var proxy = require("http-proxy-middleware");

var options = {
  target: "https://api.itbook.store",
  pathRewrite: {
    "^/api": ""
  },
  changeOrigin: true,
  logLevel: "debug"
};

// create the proxy (without context)
var exampleProxy = proxy(options);

app.use("/api", exampleProxy);
app.use(express.static(path.join(__dirname, "build")));

app.post('/place-order', (req, res) => res.send('Ok!'))

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(9000);
