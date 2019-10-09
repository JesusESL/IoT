var g1, g2;
document.addEventListener("DOMContentLoaded", function(event) {
    g1 = new JustGage({
        id: "g1",
        value: 0,
        valueFontColor: "#000000",
        min: 0,
        max: 60,
        donut: false,
        gaugeWidthScale: 0.6,
        counter: true,
        decimals: 2,
        hideInnerShadow: true,
        label: "°C",
        labelFontColor: "#000000",
        pointer: true,
        pointerOptions: {
            toplength: 10,
            bottomlength: 50,
            bottomwidth: 10,
            color: '#000000'
        },
        customSectors: {
            percents: false,
            ranges: [{
                color : "#4caf50",
                lo : 0,
                hi : 27
            },{
                color : "#ff9800",
                lo : 27.01,
                hi : 36
            },{
                color : "#f44336",
                lo : 36.01,
                hi : 50  
            }]
        }
    });
    g2 = new JustGage({
        id: "g2",
        value: 0,
        valueFontColor: "#000000",
        min: 0,
        max: 100,
        donut: false,
        gaugeWidthScale: 0.6,
        counter: true,
        hideInnerShadow: true,  
        label: "%",
        labelFontColor: "#000000",
        pointer: true,
        pointerOptions: {
            toplength: 10,
            bottomlength: 50,
            bottomwidth: 10,
            color: '#000000'
        },
        levelColors: ["#03a9f4"]
    });
});

window.onload = function() {
    document.getElementById("username").innerHTML = "Welcome " + localStorage.getItem("username") +"!";
};

function logOut(){
    localStorage.removeItem("username");
    localStorage.removeItem("rol");
}

window.setInterval(
    function(){
        opcion = 1;
        datos = {"Opcion":opcion};
        $.ajax({
            url: "../php/base_datos.php",
            type: "POST",
            data: datos
        }).done(function(respuesta){
            if (respuesta.estado === "ok") {
                console.log(JSON.stringify(respuesta));
                temperature = JSON.parse(respuesta.temperature);
                humidity = JSON.parse(respuesta.humidity);
                g1.refresh(temperature);
                g2.refresh(humidity);
                return 1;
            } else
                g1.refresh(0);
                g2.refresh(0);
            }
        );
    }
,1000);

$('#power').click(function() {
    //event.preventDefault();

    var powerButton = $("#power").val();
    console.log(powerButton);
    $.ajax({
        type: "POST",
        url: "../php/sendData.php",
        data: { button: "power" }
    }).done(function( msg ) {
        alert( "Data Saved: " + msg );
    });
});

$('#add').click(function() {
    event.preventDefault();
    
    var powerButton = $("#add").val();
    console.log(powerButton);
    $.ajax({
        type: "POST",
        url: "../php/sendData.php",
        data: { button: "add" }
    }).done(function( msg ) {
        alert( "Data Saved: " + msg );
    });
});

$('#remove').click(function() {
    event.preventDefault();
    
    var powerButton = $("#remove").val();
    console.log(powerButton);
    $.ajax({
        type: "POST",
        url: "../php/sendData.php",
        data: { button: "remove" }
    }).done(function( msg ) {
        alert( "Data Saved: " + msg );
    });
});