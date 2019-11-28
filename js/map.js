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
          if (respuesta.estado === "ok") {
              console.log(JSON.stringify(respuesta));
              delete respuesta[0];
              var data = JSON.stringify(respuesta);
              for (var i = 1; i < data.length+1; i++) {
                console.log(data[i]["id"]);
              }
              return 1;
          }
        }
      );
  }
,1000);