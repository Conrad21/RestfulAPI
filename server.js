//Conrad Ptasznik
var express = require("express");
const bodyParser = require("body-parser");
var app = express();
var fs = require("fs");

//--------------------------------------------------------
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(bodyParser.json());
var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://127.0.0.1:%s", port);
});
//To look at your sever with no request go to http://127.0.0.1:3000
