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
var buffer = '',data;

http.get('http://api.erg.kcl.ac.uk/AirQuality/Hourly/MonitoringIndex/SiteCode=KC2/Json',function(res){
  res.on("data", function (chunk) {
        buffer += chunk;
    });
  res.on("end", function (err) {
        data = JSON.parse(buffer);
        console.log(data);
    });
});
