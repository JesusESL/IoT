var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 19,
    center: {lat: 21.047688, lng: -89.644690},
    mapTypeId: 'satellite',
    
  });
}

window.setInterval(
  function(){
      opcion = 1;
      temperature = null;

      datos = {"Opcion":opcion};
      $.ajax({
          url: "../php/base_datos.php",
          type: "POST",
          data: datos
      }).done(function(respuesta){
          //console.log(JSON.stringify(respuesta));
          var data = respuesta
          console.log(data);
          console.log(data["1"]["id"]);
          delete data[0];

          var cityCircle = new google.maps.Circle({
            strokeColor: '#00FF00',
            strokeWeight: 3,
            fillColor: '#00FF00',
            map: map,
            center: {lat: data["1"]["latitude"], lng: data["1"]["longitude"]},
            radius: 10
          });
          /*for (var i = 1; i < 4; i++) {
            console.log(data[i]['id']);
          }*/
        }
      );
  }
,5000);