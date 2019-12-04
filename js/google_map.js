var map;
var circles = [];
var markers = [];
var response = false;
var dataSize = 4;
var lat = [21.049138, 21.048440, 21.047822, 21.048765];
var lng = [-89.645455, -89.644645, -89.644356, -89.644343];
var id = [1,2,3,4];
var temperature = [15,27,28,35];
var humidity = [55,63,65,68];

$(function() {
    map = new GMaps({
        div: '#map',
        zoom: 18,
        lat: 21.048273,
        lng: -89.644859
    });
});

window.setInterval(
    function(){

        opcion = 1;
        datos = {"Opcion":opcion};
        $.ajax({
            url: "../php/getData.php",
            type: "POST",
            data: datos
        }).done(function(respuesta){
            console.log(JSON.stringify(respuesta));
        });

        if(!response){
            for(var i = 0; i < dataSize; i++){
                var marker = map.addMarker({
                    lat: lat[i],
                    lng: lng[i],
                    title: 'Sensor' + id[i],
                    infoWindow: {
                        content: 'Sensor # Temperature: , Humidity'
                    }
                });
                var circle = map.drawCircle({
                    lat: lat[i],
                    lng: lng[i],
                    radius: 5,
                    strokeColor: "#00FF00",
                    fillColor: "#00FF00",
                });
                markers.push(marker);
                circles.push(circle);
            }
            console.log(markers);

            for(var i = 0; i < dataSize; i++){
                markers[i].infoWindow.set('content', 'Sensor '+ id[i] +': Temperature= ' + temperature[i] + '°C, Humidity= ' + humidity[i]);
            }

            for(var i = 0; i < dataSize; i++){
                if(temperature[i] < 19){
                    circles[i].set('fillColor','#00FF00');
                    circles[i].set('strokeColor','#00FF00');
                } else if(temperature[i] > 20 && temperature[i] < 29){
                    circles[i].set('fillColor','#F0FF00');
                    circles[i].set('strokeColor','#F0FF00');
                } else if(temperature[i] > 30){
                    circles[i].set('fillColor','#FF0000');
                    circles[i].set('strokeColor','#FF0000');
                }
            }
            response = true;
        }
    }
,1000);

$('#changeTemperature').click(function() {
    for(var i = 0; i < dataSize; i++){
        if(temperature[i] < 19){
            circles[i].set('fillColor','#00FF00');
            circles[i].set('strokeColor','#00FF00');
        } else if(temperature[i] > 20 && temperature[i] < 29){
            circles[i].set('fillColor','#F0FF00');
            circles[i].set('strokeColor','#F0FF00');
        } else if(temperature[i] > 30){
            circles[i].set('fillColor','#FF0000');
            circles[i].set('strokeColor','#FF0000');
        }
    }
});

$('#changeHumidity').click(function() {
    for(var i = 0; i < dataSize; i++){
        if(humidity[i] < 59){
            circles[i].set('fillColor','#bbdefb');
            circles[i].set('strokeColor','#bbdefb');
        } else if(humidity[i] > 60 && humidity[i] < 79){
            circles[i].set('fillColor','#42a5f5');
            circles[i].set('strokeColor','#42a5f5');
        } else if(humidity[i] > 80){
            circles[i].set('fillColor','#1565c0');
            circles[i].set('strokeColor','#1565c0');
        }
    }
});