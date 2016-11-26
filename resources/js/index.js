
// This example requires the Visualization library. Include the libraries=visualization
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCnFhWiWZdALtdAg3CYy8-YnmXXq_f6uzE&libraries=visualization">

var map, heatmap, locations, Path;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 51.485586, lng: -0.201658},
    mapTypeId: 'satellite'
  });

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
    radius: 50
  });

  locations = [
    {lat: 51.490340, lng: -0.195862},
    {lat: 51.487470, lng: -0.195757},
    {lat:51.511732, lng: -0.123270},
    {lat:51.505431, lng: -0.023533},
  ];
  Path = new google.maps.Polyline({
    path: locations,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  Path.setMap(map);
}


function addToPath(){
  geocoder = new google.maps.Geocoder();
  geocoder.geocode( { 'address': document.getElementById("input").value}, function(results, status) {
    if (status == 'OK') {
      console.log(results[0].geometry.location.toString());
      locations.push(results[0].geometry.location);
      Path = new google.maps.Polyline({
        path: locations,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });
      Path.setMap(map);

    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}



// Heatmap data: 500 Points
function getPoints() {
  var geos = []
  $.parseJSON('../data/sites.json',function(data,status){
    $.each(data,function(index,value){
      console.log(value);
      geos.push(new google.maps.LatLng(value.lat,value.lon));
    });
  });
  console.log(geos.toString());
  return geos;
  // [
  //   new google.maps.LatLng(51.487470,-0.195757),
  //   new google.maps.LatLng(51.507879,-0.087732),
  //   new google.maps.LatLng(51.489594,-0.159344),
  // ];
}

//var queryLat = '', queryLon = '';
//function getLocation(code){
  //$.getJSON('http://api.erg.kcl.ac.uk/AirQuality/Hourly/MonitoringIndex/SiteCode='+code'/Json', function(data, status){
    //$.each(data,function( index, value ){

    //});
  //});
//}
