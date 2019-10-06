var g1, g2;
document.addEventListener("DOMContentLoaded", function(event) {
    g1 = new JustGage({
        id: "g1",
        value: 0,
        min: 0,
        max: 100,
        donut: true,
        gaugeWidthScale: 0.6,
        counter: true,
        hideInnerShadow: true,
        label: "°C"
        
    });
    g2 = new JustGage({
        id: "g2",
        value: 0,
        min: 0,
        max: 100,
        donut: true,
        gaugeWidthScale: 0.6,
        counter: true,
        hideInnerShadow: true,  
        label: "%"
    });
});

window.setInterval(
    function(){
        opcion = 1;
        datos = {"Opcion":opcion};
        $.ajax({
        url: "php/base_datos.php",
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
        });
    }
,1000);