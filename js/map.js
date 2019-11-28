var map;
var redCircle;
var yellowCircle;
var greenCircle;
var marker;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 19,
    center: {lat: 21.047688, lng: -89.644690},
    mapTypeId: 'satellite',
    
  });
}

window.setInterval(
  function(){

      datos = {"Opcion":opcion};
      $.ajax({
          url: "../php/base_datos.php",
          type: "POST",
          data: datos
      }).done(function(respuesta){
          var data = respuesta
          delete data[0];
          redCircle.set('map', null);
          for(var i in data){
            if(parseFloat(data[i]["temperature"]) > 30){
              redCircle = new google.maps.Circle({
                strokeColor: '#FF0000',
                strokeWeight: 3,
                fillColor: '#FF0000',
                map: map,
                center: {lat: parseFloat(data[i]["latitude"]), lng: parseFloat(data[i]["longitude"])},
                radius: 4
              });
              marker = new google.maps.Marker({
                position: {lat: parseFloat(data[i]["latitude"]), lng: parseFloat(data[i]["longitude"])},
                map: map,
                title: data[i]["id"]
              });
            } else if((parseFloat(data[i]["temperature"]) < 30) && parseFloat(data[i]["temperature"]) > 20){
              yellowCircle = new google.maps.Circle({
                strokeColor: '#F0FF00',
                strokeWeight: 3,
                fillColor: '#F0FF00',
                map: map,
                center: {lat: parseFloat(data[i]["latitude"]), lng: parseFloat(data[i]["longitude"])},
                radius: 4
              });
              marker = new google.maps.Marker({
                position: {lat: parseFloat(data[i]["latitude"]), lng: parseFloat(data[i]["longitude"])},
                map: map,
                title: data[i]["id"]
              });  
            } else{
              greenCircle = new google.maps.Circle({
                strokeColor: '#00FF00',
                strokeWeight: 3,
                fillColor: '#00FF00',
                map: map,
                center: {lat: parseFloat(data[i]["latitude"]), lng: parseFloat(data[i]["longitude"])},
                radius: 4
              }); 
              marker = new google.maps.Marker({
                position: {lat: parseFloat(data[i]["latitude"]), lng: parseFloat(data[i]["longitude"])},
                map: map,
                title: data[i]["id"]
              });   
            }

          }
        }
      );
  }
,5000);