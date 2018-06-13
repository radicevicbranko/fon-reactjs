const express = require("express");
const path = require("path");
const app = express();

const proxy = require("http-proxy-middleware");
const proxyOptions = {
  target: "https://api.itbook.store",
  pathRewrite: {
    "^/api": ""
  },
  changeOrigin: true,
  logLevel: "debug"
};

app.use(express.static(path.join(__dirname, "build")));
app.use("/api", proxy(proxyOptions));
app.post("/place-order", (req, res) => res.send("ok"));
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(process.env.PORT || 9988, () =>
  console.log("Server is listening on port 9988")
);
