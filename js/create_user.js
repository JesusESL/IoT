$('##createUser').submit(function() {
  var username = $("input[name=name]").val();
  var email = $("input[name=email]").val();
  var sensor_id = $("input[name=id]").val();

  console.log(username);
  console.log(email);
  console.log(sensor_id);
});