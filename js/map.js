var map;
var sensor1;
var marker;
var flag = false;
var sensor;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 19,
    center: {lat: 21.047688, lng: -89.644690},
    mapTypeId: 'satellite',   
  });
}

window.setInterval(
  function(){
      var opcion = 1;
      datos = {"Opcion":opcion};
      $.ajax({
          url: "../php/base_datos.php",
          type: "POST",
          data: datos
      }).done(function(respuesta){
          var data = respuesta
          delete data[0];

          for(var i in data){
            if(parseFloat(data[i]["temperature"]) > 30){
              if(flag == false){
                sensor = new google.maps.Circle({
                  strokeColor: '#FF0000',
                  strokeWeight: 3,
                  fillColor: '#FF0000',
                  map: map,
                  center: {lat: parseFloat(data[i]["latitude"]), lng: parseFloat(data[i]["longitude"])},
                  radius: 4
                });
                flag = true;
              } else{
                sensor.set('map', 'null');
              }
              
            } else if((parseFloat(data[i]["temperature"]) < 30) && parseFloat(data[i]["temperature"]) > 20){
              var sensor = new google.maps.Circle({
                strokeColor: '#F0FF00',
                strokeWeight: 3,
                fillColor: '#F0FF00',
                map: map,
                center: {lat: parseFloat(data[i]["latitude"]), lng: parseFloat(data[i]["longitude"])},
                radius: 4
              });
            } else{  
              var sensor = new google.maps.Circle({
                strokeColor: '#00FF00',
                strokeWeight: 3,
                fillColor: '#00FF00',
                map: map,
                center: {lat: parseFloat(data[i]["latitude"]), lng: parseFloat(data[i]["longitude"])},
                radius: 4
              });
            }
          }

        }
      );
  }
,5000);