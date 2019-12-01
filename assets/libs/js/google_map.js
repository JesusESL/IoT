var map;
$(function() {
    map = new GMaps({
        div: '#map',
        zoom: 17,
        lat: 21.047554,
        lng: -89.644688
    });
    map.addMarker({
        lat: 21.049138,
        lng: -89.645455,
        title: 'Sensor1',
        infoWindow: {
            content: '<p>Sensor1</p><p>Temperature: 31, Humidity: 62</p>'
        }
    });
    map.drawCircle({
        lat: 21.049138,
        lng: -89.645455,
        radius: 5,
        strokeColor: "#00FF00",
        fillColor: "#00FF00",
    });

    map.addMarker({
        lat: 21.048440,
        lng: -89.644645,
        title: 'Sensor2',
        infoWindow: {
            content: '<p>Sensor1</p><p>Temperature: 31, Humidity: 63</p>'
        }
    });
    map.drawCircle({
        lat: 21.048440,
        lng: -89.644645,
        radius: 5,
        strokeColor: "#00FF00",
        fillColor: "#00FF00",
    });

    map.addMarker({
        lat: 21.047822,
        lng: -89.644356,
        title: 'Sensor3',
        infoWindow: {
            content: '<p>Sensor1</p><p>Temperature: 31, Humidity: 64</p>'
        }
    });
    map.drawCircle({
        lat: 21.047822,
        lng: -89.644356,
        radius: 5,
        strokeColor: "#00FF00",
        fillColor: "#00FF00",
    });

    map.addMarker({
        lat: 21.048765,
        lng: -89.644343,
        title: 'Sensor4',
        infoWindow: {
            content: '<p>Sensor1</p><p>Temperature: 31, Humidity: 65</p>'
        }
    });
    map.drawCircle({
        lat: 21.048765,
        lng: -89.644343,
        radius: 5,
        strokeColor: "#00FF00",
        fillColor: "#00FF00",
    });
});