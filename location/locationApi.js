var http = require('http');
var url = 'http://api.airvisual.com/v1/nearest?lat=';
//lat=29.52961&lon=34.938219
var key = '&key=asFXz9gTSPetd4T7D';

function parsePolData(lon,lat){
  var fullurl = url + lat + '&lon='+lon;
  http.get(fullurl, function(res){
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => rawData += chunk);
    res.on('end', () => {
      try {
        let parsedData = JSON.parse(rawData);
        console.log(parsedData);
      } catch (e) {
        console.log(e.message);
      }
    });
  }).on('error', function(e){
    console.log(`Got error: ${e.message}`);
  });
}
