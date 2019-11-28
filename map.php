<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Map</title>
    <style>
      #map {
        height: 100%;
      }

      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
      #floating-panel {
        position: absolute;
        top: 10px;
        left: 25%;
        z-index: 5;
        background-color: #fff;
        padding: 5px;
        border: 1px solid #999;
        text-align: center;
        font-family: 'Roboto','sans-serif';
        line-height: 30px;
        padding-left: 10px;
      }
      #floating-panel {
        background-color: #fff;
        border: 1px solid #999;
        left: 25%;
        padding: 5px;
        position: absolute;
        top: 10px;
        z-index: 5;
      }
    </style>
  </head>

  <body>
    <div id="map"></div>
    <script>
      var map;

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 19,
          center: {lat: 21.047688, lng: -89.644690},
          mapTypeId: 'satellite',
          
        });
        var cityCircle = new google.maps.Circle({
          strokeColor: '#00FF00',
          strokeWeight: 3,
          fillColor: '#00FF00',
          map: map,
          center: {lat: 21.048379, lng: -89.644755},
          radius: 3
        });
      }
    </script>
    <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCsqd1-ksda8OLf60IgmrfTknNNJAGdhN0&libraries=visualization&callback=initMap">
    </script>
    <script src="js/jquery-2.1.0.min.js"></script>
    <script src="js/map.js"></script>
  </body>
</html>