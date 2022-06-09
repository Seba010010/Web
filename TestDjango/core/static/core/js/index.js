const weatherApiKey = "21cb506374ca441994005702222804"; // poner tu api key
let contadorClicks = 0;

$(document).ready(function () {
  $("#imagenPerro").click(function () {
    contadorClicks += 1;
    console.log(contadorClicks);
  });

  $("#joinusName").focusout(function () {
    console.log("Sali del foco nombre");

    if ($("#joinusName")[0].value == "" || $("#joinusName")[0].value == null) {
      document
        .getElementsByName("joinusNameAlertName")[0]
        .classList.remove("hide");
    } else {
      document
        .getElementsByName("joinusNameAlertName")[0]
        .classList.add("hide");
      console.log("mmmmmm");
    }
  });

  $("#joinusEmail").focusout(function () {
    console.log("Sali del foco correo");

    if (
      $("#joinusEmail")[0].value == "" ||
      $("#joinusEmail")[0].value == null
    ) {
      document
        .getElementsByName("joinusNameAlertCorreo")[0]
        .classList.remove("hide");
    } else {
      document
        .getElementsByName("joinusNameAlertCorreo")[0]
        .classList.add("hide");
      console.log("mmmmmm");
    }
  });

  $("#comentarios").focusout(function () {
    console.log("Sali del foco comentario");

    if (
      $("#comentarios")[0].value == "" ||
      $("#comentarios")[0].value == null
    ) {
      document
        .getElementsByName("joinusNameAlertComentario")[0]
        .classList.remove("hide");
    } else {
      document
        .getElementsByName("joinusNameAlertComentario")[0]
        .classList.add("hide");
      console.log("mmmmmm");
    }
  });

  $("#joinus").submit(function (event) {
    console.log("Formulario enviado");
    event.preventDefault();
  });

  if ("geolocation" in navigator) {
    /* geolocation is available */
    console.log("available");
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
      $.get(
        `https://api.weatherapi.com/v1/current.json?q=${position.coords.latitude},${position.coords.longitude}&key=${weatherApiKey}`,
        function (data) {
          console.log(data);

          $("#geolocalizacion").append(
            "<tr><td>" + data.current.temp_c + "</td></tr>"
          );
        }
      );
    });
  } else {
    /* geolocation IS NOT available */
    console.log("not available");
  }
});
