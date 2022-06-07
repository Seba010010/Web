let contadorClicks = 0;

$(document).ready(function () {
  $("#joinusName").focusout(function () {
    console.log("Sali del foco nombre");

    if (
      $("#joinusName")[0].value == "" ||
      $("#joinusName")[0].value.trim() == "" ||
      $("#joinusName")[0].value == null
    ) {
      document
        .getElementsByName("joinusNameAlertName")[0]
        .classList.remove("hide");
    } else {
      document
        .getElementsByName("joinusNameAlertName")[0]
        .classList.add("hide");
      console.log("1");
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

      document
        .getElementsByName("joinusNameAlertCorreoFormato")[0]
        .classList.add("hide");
    } else {
      document
        .getElementsByName("joinusNameAlertCorreo")[0]
        .classList.add("hide");
      console.log("2");
      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
      if (!regexEmail.test(joinusEmail.value)) {
        document
          .getElementsByName("joinusNameAlertCorreoFormato")[0]
          .classList.remove("hide");
      } else {
        document
          .getElementsByName("joinusNameAlertCorreoFormato")[0]
          .classList.add("hide");
      }
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

  $("#joinusNameLogin").focusout(function () {
    console.log("Sali del foco nombre");

    if (
      $("#joinusNameLogin")[0].value == "" ||
      $("#joinusNameLogin")[0].value.trim() == "" ||
      $("#joinusNameLogin")[0].value == null
    ) {
      document
        .getElementsByName("joinusNameAlertNameLogin")[0]
        .classList.remove("hide");
    } else {
      document
        .getElementsByName("joinusNameAlertNameLogin")[0]
        .classList.add("hide");
      console.log("1");
    }
  });

  $("#joinusNamePwdLogin").focusout(function () {
    console.log("Sali del foco nombre");

    if (
      $("#joinusNamePwdLogin")[0].value == "" ||
      $("#joinusNamePwdLogin")[0].value.trim() == "" ||
      $("#joinusNamePwdLogin")[0].value == null
    ) {
      document
        .getElementsByName("joinusNameAlertPwdLogin")[0]
        .classList.remove("hide");
    } else {
      document
        .getElementsByName("joinusNameAlertPwdLogin")[0]
        .classList.add("hide");
      console.log("1");
    }
  });

  $("#joinusNamePwdRegistro").focusout(function () {
    console.log("Sali del foco nombre");

    if (
      $("#joinusNamePwdRegistro")[0].value == "" ||
      $("#joinusNamePwdRegistro")[0].value.trim() == "" ||
      $("#joinusNamePwdRegistro")[0].value == null
    ) {
      document
        .getElementsByName("joinusNameAlertPwdRegistro")[0]
        .classList.remove("hide");
    } else {
      document
        .getElementsByName("joinusNameAlertPwdRegistro")[0]
        .classList.add("hide");
      console.log("1");
    }
  });

  $("#joinusNameUsuarioRegistro").focusout(function () {
    console.log("Sali del foco nombre");

    if (
      $("#joinusNameUsuarioRegistro")[0].value == "" ||
      $("#joinusNameUsuarioRegistro")[0].value.trim() == "" ||
      $("#joinusNameUsuarioRegistro")[0].value == null
    ) {
      document
        .getElementsByName("joinusNameAlertNameUsuarioRegistro")[0]
        .classList.remove("hide");
    } else {
      document
        .getElementsByName("joinusNameAlertNameUsuarioRegistro")[0]
        .classList.add("hide");
      console.log("1");
    }
  });

  $("#joinusEmailRegistro").focusout(function () {
    console.log("Sali del foco correo");

    if (
      $("#joinusEmailRegistro")[0].value == "" ||
      $("#joinusEmailRegistro")[0].value == null
    ) {
      document
        .getElementsByName("joinusNameAlertEmailRegistro")[0]
        .classList.remove("hide");
    } else {
      document
        .getElementsByName("joinusNameAlertEmailRegistro")[0]
        .classList.add("hide");
      console.log("2");
      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
      if (!regexEmail.test(joinusEmailRegistro.value)) {
        document
          .getElementsByName("joinusNameAlertEmailFormatoRegistro")[0]
          .classList.remove("hide");
      } else {
        document
          .getElementsByName("joinusNameAlertEmailFormatoRegistro")[0]
          .classList.add("hide");
      }
    }
  });

  $("#joinusContraseñaRegistro").focusout(function () {
    console.log("Sali del foco nombre");

    if (
      $("#joinusContraseñaRegistro")[0].value == "" ||
      $("#joinusContraseñaRegistro")[0].value.trim() == "" ||
      $("#joinusContraseñaRegistro")[0].value == null
    ) {
      document
        .getElementsByName("joinusNameAlertContraseñaRegistro")[0]
        .classList.remove("hide");
    } else {
      document
        .getElementsByName("joinusNameAlertContraseñaRegistro")[0]
        .classList.add("hide");
      console.log("1");
    }
  });

  $("#joinusRegistro").submit(function (event) {
    console.log("Formulario enviado");
    event.preventDefault();
  });

  $("#button_api_animales").click(function () {
    $.get(`https://cat-fact.herokuapp.com/facts`, function (data) {
      console.log(data);

      $("#datos_animales").append(
        "<ul><li>" +
          data[0].text +
          "</li><li>" +
          data[1].text +
          "</li><li>" +
          data[2].text +
          "</li><li>" +
          data[3].text +
          "</li></ul>"
      );
      console.log(data[0].text);
      console.log(data[1].text);
      console.log(data[2].text);
      console.log(data[3].text);
    });
  });
});
