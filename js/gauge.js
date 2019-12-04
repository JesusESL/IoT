var IDsensor = -1;
var id = [1,2,3,4];
var temperature = [15,27,28,35];
var humidity = [55,63,65,68];
var gaugeTemperature;
var gaugeHumidity;
$(function() {
    "use strict";
    // ============================================================== 
    // Guage 1
    // ============================================================== 
    console.log("Inicializando...");
    var opts = {
        angle: 0, // The span of the gauge arc
        lineWidth: 0.32, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.6, // // Relative to gauge radius
            strokeWidth: 0.088, // The thickness
            color: '#2e2f39' // Fill color
        },
        limitMax: false, // If false, max value increases automatically if value > maxValue
        limitMin: false, // If true, the min value of the gauge will be fixed
        colorStart: '#e4e4ee', // Colors
        colorStop: '#5969ff', // just experiment with them
        strokeColor: '#e4e4ee', // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true, // High resolution support
        staticZones: [
            {strokeStyle: "#00FF00", min: 0, max: 20}, // Red from 100 to 130
            {strokeStyle: "#F0FF00", min: 20, max: 30}, // Yellow
            {strokeStyle: "#FF0000", min: 30, max: 50}, // Green
         ],
    };
    var target = document.getElementById('gauge1'); // your canvas element
    gaugeTemperature = new Gauge(target).setOptions(opts); // create sexy gauge!
    gaugeTemperature.setTextField(document.getElementById('gauge1-value'));
    gaugeTemperature.maxValue = 50; // set max gauge value
    gaugeTemperature.setMinValue(0); // Prefer setter over gauge.minValue = 0
    gaugeTemperature.animationSpeed = 76; // set animation speed (32 is default value)
    gaugeTemperature.set(25); // set actual value

    console.log("Inicializando...");
// ============================================================== 
    // Guage 2
    // ============================================================== 


    var opts = {
        angle: 0, // The span of the gauge arc
        lineWidth: 0.32, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.6, // // Relative to gauge radius
            strokeWidth: 0.088, // The thickness
            color: '#2e2f39' // Fill color
        },
        limitMax: false, // If false, max value increases automatically if value > maxValue
        limitMin: false, // If true, the min value of the gauge will be fixed
        colorStart: '#e4e4ee', // Colors
        colorStop: '#5969ff', // just experiment with them
        strokeColor: '#e4e4ee', // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true, // High resolution support
        staticZones: [
            {strokeStyle: "#bbdefb", min: 0, max: 60}, // Red from 100 to 130
            {strokeStyle: "#42a5f5", min: 60, max: 80}, // Yellow
            {strokeStyle: "#1565c0", min: 80, max: 100}, // Green
         ],
    };
    var target = document.getElementById('gauge2'); // your canvas element
    gaugeHumidity = new Gauge(target).setOptions(opts); // create sexy gauge!
    gaugeHumidity.setTextField(document.getElementById('gauge2-value'), '°C');
    gaugeHumidity.maxValue = 100; // set max gauge value
    gaugeHumidity.setMinValue(0); // Prefer setter over gauge.minValue = 0
    gaugeHumidity.animationSpeed = 76; // set animation speed (32 is default value)
    gaugeHumidity.set(50); // set actual value
    console.log("Inicializando...");
});


$('tr').click(function(e) {
    var txt = $(e.target).closest("tr");
    IDsensor = parseInt(txt.find("td:eq(0)").text());
    document.getElementById("sensorName").innerHTML = "Name: " + txt.find("td:eq(1)").text();
    document.getElementById("sensorID").innerHTML = "ID sensor: " + txt.find("td:eq(0)").text();
    document.getElementById("sensorLocation").innerHTML = "Location: (" + txt.find("td:eq(3)").text() + "," + txt.find("td:eq(4)").text()+ ")";
    document.getElementById("sensorDate").innerHTML = "Last update data: " + txt.find("td:eq(5)").text();

    gaugeTemperature.set(temperature[IDsensor-1]);
    gaugeHumidity.set(humidity[IDsensor-1]);
 });


window.setInterval(function(){
    
},1000)

