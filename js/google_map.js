var map;
var circles = [];
var markers = [];
var response = false;
var ready = false;
var dataSize = 0;
var lat = [];
var lng = [];
var id = [];
var temperature = [];
var humidity = [];
var showHumidity = false;
var showTemperature = true;

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

        var opcion = 1;
        datos = {"Opcion":opcion};
        $.ajax({
            url: "../php/getData.php",
            type: "POST",
            data: datos
        }).done(function(respuesta){
            lat = [];
            lng = [];
            id = [];
            temperature = [];
            humidity = [];
            var data = respuesta;
            dataSize = Object.keys(data).length;
            for(var i = 1; i < dataSize+1; i++){
                id.push(data[i]["sensor_id"]);
                lat.push(data[i]["latitude"]);
                lng.push(data[i]["longitude"]);
                temperature.push(data[i]["temperature"]);
                humidity.push(data[i]["humidity"]);
            }
            ready = true;
        });

        if(ready){
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
                response = true;
            }
            for(var i = 0; i < dataSize; i++){
                markers[i].infoWindow.set('content', 'Sensor '+ id[i] +': Temperature= ' + temperature[i] + '°C, Humidity= ' + humidity[i]);
            }

            if(showTemperature){
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
            }

            if(showHumidity){
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
            }
        }
    }
,1000);

function changeTemperature() {
    showTemperature = true;
    showHumidity = false;
    console.log(showTemperature);
    console.log(showHumidity);
};

function changeHumidity() {
    showTemperature = false;
    showHumidity = true;
    console.log(showTemperature);
    console.log(showHumidity);
};
