const http = require('http');
const fs = require('fs');
const path = require('path');
var express = require('express')
const app = express();

app.get('/',function(req,res){
  res.sendFile('/resources/views/index.html',{root: __dirname});
});

app.use(express.static('resources'));
app.listen(8080);
