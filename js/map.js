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
              return 1;
          }
        }
      );
  }
,1000);