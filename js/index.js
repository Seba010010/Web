let contadorClicks = 0;

$(document).ready(function() {

    
    $('#joinusName').focusout(function() {
        console.log("Sali del foco nombre")

        if ($('#joinusName')[0].value == '' || $('#joinusName')[0].value == null) {
            document.getElementsByName("joinusNameAlertName")[0].classList.remove('hide');
        } else {
            document.getElementsByName("joinusNameAlertName")[0].classList.add('hide');
            console.log("1")
            
        }

        
    })

    $('#joinusEmail').focusout(function() {
        console.log("Sali del foco correo")
        
        if ($('#joinusEmail')[0].value == '' || $('#joinusEmail')[0].value == null) {
            document.getElementsByName("joinusNameAlertCorreo")[0].classList.remove('hide');
            
        } else {
            document.getElementsByName("joinusNameAlertCorreo")[0].classList.add('hide');
            console.log("2")
            
        }
    })   
    
    $('#joinus').submit(function(event) {
        console.log("Formulario enviado")
        event.preventDefault();
    });

   
    
});