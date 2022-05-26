let  contadorClicks  =  0 ;

$ ( documento ) . listo ( función ( )  {



    $ ( '#unirnosNombre' ) . enfoque ( función ( )  {
        consola _ log ( "Sali del foco nombre" )

        if  ( $ ( '#joinusName' ) [ 0 ] . value  ==  ''  ||  $ ( '#joinusName' ) [ 0 ] . value . trim ( ) ==  ""   ||  $ ( '#joinusName' ) [ 0 ] .valor == nulo ) { _   
            documento _ getElementsByName ( "joinusNameAlertName" ) [ 0 ] . listaclases . eliminar ( 'ocultar' ) ;
        }  más  {
            documento _ getElementsByName ( "joinusNameAlertName" ) [ 0 ] . listaclases . añadir ( 'ocultar' ) ;
            consola _ registro ( "1" )
            
        }

        
    } )

    $ ( '#joinusEmail' ) . enfoque ( función ( )  {
        consola _ log ( "Sali del foco correo" )
        
        
        if  ( $ ( '#joinusEmail' ) [ 0 ] . value  ==  ''  ||  $ ( '#joinusEmail' ) [ 0 ] . value  ==  null )  {
            documento _ getElementsByName ( "joinusNameAlertCorreo" ) [ 0 ] . listaclases . eliminar ( 'ocultar' ) ;

            documento _ getElementsByName ( "joinusNameAlertCorreoFormato" ) [ 0 ] . listaclases . añadir ( 'ocultar' ) ;
            
       

        }  más  {
            documento _ getElementsByName ( "joinusNameAlertCorreo" ) [ 0 ] . listaclases . añadir ( 'ocultar' ) ;
            consola _ registro ( "2" )
            let  regexEmail  =  / ^ \w + ( [ \. - ] ? \w + ) * @ \w + ( [ \. - ] ? \w + ) * ( \. \w { 2,4 } ) + $ /
            if ( ! regexEmail . prueba ( joinusEmail . valor ) ) {
                documento _ getElementsByName ( "joinusNameAlertCorreoFormato" ) [ 0 ] . listaclases . eliminar ( 'ocultar' ) ;
                    
            } 
            demás 
            {
                documento _ getElementsByName ( "joinusNameAlertCorreoFormato" ) [ 0 ] . listaclases . añadir ( 'ocultar' ) ;
                
            }    
    
      
            }
     
    } ) 

    $ ( '#comentarios' ) . enfoque ( función ( )  {
        consola _ log ( "Sali del foco comentario" )
        
        if  ( $ ( '#comentarios' ) [ 0 ] . valor  ==  ''  ||  $ ( '#comentarios' ) [ 0 ] . valor  ==  null )  {
            documento _ getElementsByName ( "joinusNameAlertComentario" ) [ 0 ] . listaclases . eliminar ( 'ocultar' ) ;
            
        }  más  {
            documento _ getElementsByName ( "joinusNameAlertComentario" ) [ 0 ] . listaclases . añadir ( 'ocultar' ) ;
            consola _ registro ( "mmmmmm" )
            
        }
    } )   

  
    
    $ ( '#únete' ) . enviar ( función ( evento )  {
        
        consola _ log ( "Formulario enviado" )
        evento _ prevenirPredeterminado ( ) ;
    } ) ;

$ ( documento ) . listo ( función ( )  {
    $ ( '#joinusNameRegistro' ) . enfoque ( función ( )  {
        consola _ log ( "Sali del foco nombre" )

        if  ( $ ( '#joinusNameRegistro' ) [ 0 ] . value  ==  ''  ||  $ ( '#joinusNameRegistro' ) [ 0 ] . value . trim ( ) ==  ""  ||  $ ( '#joinusNameRegistro' ) [ 0 ] .valor == nulo ) { _   
            documento _ getElementsByName ( "joinusNameAlertNameRegistro" ) [ 0 ] . listaclases . eliminar ( 'ocultar' ) ;
        }  más  {
            documento _ getElementsByName ( "joinusNameAlertNameRegistro" ) [ 0 ] . listaclases . añadir ( 'ocultar' ) ;
            consola _ registro ( "1" )
            
        }

        
    } )

    $ ( '#joinusEmailRegistro' ) . enfoque ( función ( )  {
        consola _ log ( "Sali del foco correo" )
        
        
        if  ( $ ( '#joinusEmailRegistro' ) [ 0 ] . value  ==  ''  ||  $ ( '#joinusEmailRegistro' ) [ 0 ] . value  ==  null )  {
            documento _ getElementsByName ( "joinusNameAlertCorreoRegistro" ) [ 0 ] . listaclases . eliminar ( 'ocultar' ) ;

            documento _ getElementsByName ( "joinusNameAlertCorreoFormatoRegistro" ) [ 0 ] . listaclases . añadir ( 'ocultar' ) ;
            
       

        }  más  {
            documento _ getElementsByName ( "joinusNameAlertCorreoRegistro" ) [ 0 ] . listaclases . añadir ( 'ocultar' ) ;
            consola _ registro ( "2" )
            let  regexEmail  =  / ^ \w + ( [ \. - ] ? \w + ) * @ \w + ( [ \. - ] ? \w + ) * ( \. \w { 2,4 } ) + $ /
            if ( ! regexEmail . prueba ( joinusEmailRegistro . valor ) ) {
                documento _ getElementsByName ( "joinusNameAlertCorreoFormatoRegistro" ) [ 0 ] . listaclases . eliminar ( 'ocultar' ) ;
                    
            } 
            demás 
            {
                documento _ getElementsByName ( "joinusNameAlertCorreoFormatoRegistro" ) [ 0 ] . listaclases . añadir ( 'ocultar' ) ;
                
            }    
    
      
            }
     
    } ) 

  
    
    $ ( '#joinusRegistro' ) . enviar ( función ( evento )  {
        
        consola _ log ( "Formulario enviado" )
        evento _ prevenirPredeterminado ( ) ;
    } ) ;
} )

    $ ( '#button_api_animales' ) . haga clic en ( función ( )  {
        $ . obtener ( `https://cat-fact.herokuapp.com/facts` , 
            función ( datos )  {
                consola _ registro ( datos )
                
                    $ ( "#datos_animales" ) . agregar ( "<ul><li>" + datos [ 0 ] . texto + "</li><li>" + datos [ 1 ] . texto + "</li><li>" + datos [ 2 ] . texto + "</li><li>" + datos [ 3 ] . texto + "</li></ul>" ) ;
                    consola _ registro ( datos [ 0 ] . texto ) ;
                    consola _ registro ( datos [ 1 ] . texto ) ;
                    consola _ registro ( datos [ 2 ] . texto ) ;
                    consola _ registro ( datos [ 3 ] . texto ) ;
            } )
        
    } )

   
    
} ) ;