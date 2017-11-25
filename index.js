"use strict";

const express = require("express");
const { resolve } = require("path");
const app = express();
const fs = require("fs");
const server = require("http").createServer(app);
var http = require("http");

setInterval(function() {
    http.get("http://maz-portfolio.herokuapp.com");
}, 300000);

module.exports = app
  .use(require("volleyball"))
  .use(express.static(resolve(__dirname, "public")))
  .use('/semantic', express.static((__dirname + '/node_modules/semantic-ui/dist/')))
  .use('/jquery', express.static((__dirname + '/node_modules/jquery/dist/')))
  .use('/font-awesome', express.static((__dirname + '/node_modules/font-awesome/')))
  .get("/", (_, res) =>
    res.sendFile(resolve(__dirname, "public", "index.html"))
  )
  .use((err, req, res, next) => {
    console.error(err);
  });

server.listen(process.env.PORT || 1337, function() {
  console.log("The server is listening on port 1337");
});