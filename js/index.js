let contadorClicks = 0;

$(document).ready(function() {



    $('#joinusName').focusout(function() {
        console.log("Sali del foco nombre")

        if ($('#joinusName')[0].value == '' || $('#joinusName')[0].value.trim()== ""  || $('#joinusName')[0].value == null) {
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

            document.getElementsByName("joinusNameAlertCorreoFormato")[0].classList.add('hide');
            
       

        } else {
            document.getElementsByName("joinusNameAlertCorreo")[0].classList.add('hide');
            console.log("2")
            let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
            if(!regexEmail.test(joinusEmail.value)){
                document.getElementsByName("joinusNameAlertCorreoFormato")[0].classList.remove('hide');
                    
            } 
            else 
            {
                document.getElementsByName("joinusNameAlertCorreoFormato")[0].classList.add('hide');
                
            }    
    
      
            }
     
    }) 

    $('#comentarios').focusout(function() {
        console.log("Sali del foco comentario")
        
        if ($('#comentarios')[0].value == '' || $('#comentarios')[0].value == null) {
            document.getElementsByName("joinusNameAlertComentario")[0].classList.remove('hide');
            
        } else {
            document.getElementsByName("joinusNameAlertComentario")[0].classList.add('hide');
            console.log("mmmmmm")
            
        }
    })   

  
    
    $('#joinus').submit(function(event) {
        
        console.log("Formulario enviado")
        event.preventDefault();
    });

$(document).ready(function() {
    $('#joinusNameRegistro').focusout(function() {
        console.log("Sali del foco nombre")

        if ($('#joinusNameRegistro')[0].value == '' || $('#joinusNameRegistro')[0].value == null) {
            document.getElementsByName("joinusNameAlertNameRegistro")[0].classList.remove('hide');
        } else {
            document.getElementsByName("joinusNameAlertNameRegistro")[0].classList.add('hide');
            console.log("1")
            
        }

        
    })

    $('#joinusEmailRegistro').focusout(function() {
        console.log("Sali del foco correo")
        
        
        if ($('#joinusEmailRegistro')[0].value == '' || $('#joinusEmailRegistro')[0].value == null) {
            document.getElementsByName("joinusNameAlertCorreoRegistro")[0].classList.remove('hide');

            document.getElementsByName("joinusNameAlertCorreoFormatoRegistro")[0].classList.add('hide');
            
       

        } else {
            document.getElementsByName("joinusNameAlertCorreoRegistro")[0].classList.add('hide');
            console.log("2")
            let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
            if(!regexEmail.test(joinusEmailRegistro.value)){
                document.getElementsByName("joinusNameAlertCorreoFormatoRegistro")[0].classList.remove('hide');
                    
            } 
            else 
            {
                document.getElementsByName("joinusNameAlertCorreoFormatoRegistro")[0].classList.add('hide');
                
            }    
    
      
            }
     
    }) 

  
    
    $('#joinusRegistro').submit(function(event) {
        
        console.log("Formulario enviado")
        event.preventDefault();
    });
})

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

   
    
});
