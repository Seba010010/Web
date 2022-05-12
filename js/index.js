let contadorClicks = 0;

$(document).ready(function() {

    $('#button_api_animales').click(function() {
        $.get(`https://cat-fact.herokuapp.com/facts`, 
            function(data) {
                console.log(data)
                
                    $("#datos_animales").append("<ul><li>"+data[0].text+"</li><li>"+data[1].text+"</li><li>"+data[2].text+"</li><li>"+data[3].text+"</li></ul>");
                    console.log(data[0].text);
                    console.log(data[1].text);
                    console.log(data[2].text);
                    console.log(data[3].text);
            })
        
    })


    
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
