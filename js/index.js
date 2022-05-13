<!doctype html>
<html lang="en">
  <head>
    <!---formato de las ñ, letra por defecto y estilo de boostrap y hoja de estilo de nosotros-->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="./estilos/style.css" rel="stylesheet">
    <!--titulo de la pagina y tipo de fuente de google fonts-->
    <title>Home Colitas</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Chelsea+Market&display=swap" rel="stylesheet">
  </head>
  <header class="bg-white">
    <div class="row">
        <div class ="col-lg-3 col-md-4 col-12">
            <img src="imagenes/logo 2.jpg" class="img-fluid">
        </div> 
        <div class="col-lg col-md col bg-gradient">
          <h1 class="mt-5   "> Colitas </h1>
          <P class=" ">Tienda de accesorios para tus mascotas</h2>
        </div>
        <div class ="col-lg-3 col-md-4 col-12">
        </div>    
    </div>

    
</header>
<main>
  <div class="container">
    <header class="d-flex justify-content-center py-2">
      <ul class="nav nav-pills">
        <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
        <li class="nav-item"><a href="index2.html" class="nav-link">Sobre Nosotros</a></li>
        <li class="nav-item"><a href="index3.html" class="nav-link">Tienda</a></li>
        <li class="nav-item"><a href="index4.html" class="nav-link">Contacto</a></li>
        
      </ul>
    </header>
  </div>
    
</main>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

<body>
  <div class="row">
    <div class="col-lg-2 col-md-2 col-2">
      <h1 class = "text-align: left ">Registrarse</h1>
    </div> 
  </div>
  
  <div class="formulario_contacto col-lg-6 col-md-6 col">
    
    <form name="joinus" id="joinusRegistro">
  
      <div class="form-group">
        <label>Nombre completo</label>
        <input class="form-control" type="text" placeholder="Ej: Claudia Gomez Quezada" name="name" id="joinusNameRegistro">
        <div class="alert alert-danger hide" role="alert" name="joinusNameAlertNameRegistro">
            Debes rellenar el nombre
        </div>
      </div>
  
     
      <div class="form-group">
        <label>Correo eléctronico</label>
        <input class="form-control" type="email" placeholder="Ej: tucorreo@gmail.com" name="email" id="joinusEmailRegistro">
        <div class="alert alert-danger hide" role="alert" name="joinusNameAlertCorreoRegistro">
            Debes rellenar el correo
        </div>
        <div class="alert alert-danger hide" role="alert" name="joinusNameAlertCorreoFormatoRegistro">
          Error de formato en el correo
        </div>
      </div>
      
      <br>
      

      <div>
        <button type="submit" class="btn btn-outline-primary">Registrarme</button>
        <button type="reset" class="btn btn-outline-danger">Borrar Datos</button>
      </div>
      
    </form>
  </div>    
  
  
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
   
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="imagenes/perrito_carrusel.jpg" class="d-block w-100" alt="PERRITO CARRUSEL">
        <div class="carousel-caption caption-center text-align: center">
          <h3 id="titulo_carrusel" class="font_3" style="line-height:1em; text-align:center; font-size:35px;">
            <span style="letter-spacing:normal;">
              <span style="color:rgb(255, 255, 255);">Cuidando siempre a tus colitas</span>
            </span>
          </h3>
        </div>
      </div>
      <div class="carousel-item">
        <img src="imagenes/perrito_blanco_carrusel.jpg" class="d-block w-100" alt="PERRITO BLANCO CARRUSEL">
        <div class="carousel-caption caption-center text-align: center">
          <h3 id="titulo_carrusel" class="font_3" style="line-height:1em; text-align:center; font-size:35px;">
            <span style="letter-spacing:normal;">
              <span style="color:rgb(255, 255, 255);">Amamos a todos los animales</span>
            </span>
          </h3>
        </div>
      </div>
      <div class="carousel-item">
        <img src="imagenes/gatito_carrusel.jpg" class="d-block w-100" alt="GATITO CARRUSEL">
        <div class="carousel-caption caption-center">
          <h3 id="titulo_carrusel" class="font_3" style="line-height:1em; text-align:center; font-size:35px;">
            <span style="letter-spacing:normal;">
              <span style="color:rgb(255, 255, 255);"> Son nuestros mejores amigos</span>
            </span>
          </h3>
        </div>
      </div>
    </div>
  </div>
  
  <div id="comp-iljh9ssj" class="_2Hij5 mt-5" data-testid="richTextElement">
    <h4 class="font_4 " style="line-height:normal; text-align:center; font-size:35px;">
      <span id="span_celeste" style="letter-spacing:normal;">Tenemos todo lo que tu peludo necesita</span>
    </h4>
  </div>
  <div id="comp-iljh9st8" class="_2Hij5" data-testid="richTextElement">
    <p  id ="parrafo_span_pequeño"class="font_8" style="text-align:center; line-height:normal; font-size:15px;">
      <span id="span_pequeño" style="letter-spacing:normal;">Fabricamos nuestros productos con materiales reciclados.</span>
    </p>
  </div>  
  

    <div class="row">
      <div class="col-lg-4 col-md-4 col-12 mt-5">
        
        
        <div class="row">
          
          
          <div id="col_historia" class="_2Hij5"  data-testid="richTextElement">
            <h6 class="font_6" style="line-height:normal; text-align:center; font-size:22px;">
              <span style="letter-spacing:normal;">Nuestra Historia</span>
            </h6>
          </div>
        </div>  
        
        <div class="row">
          <div id="p_historia" class="_2Hij5 " data-testid="richTextElement">
            <p id="parrafo_historia" class="font_8" style="line-height:1.5em; text-align:center; font-size:15px;">
              <span style="letter-spacing:normal;">Somos un ONG sin fines de lucro que ayuda a las colitas que más lo necesitan.</span>
            </p>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-4 col-12 mt-5">
        <div class="row">
          <div id="col_hacemos" class="_2Hij5" data-testid="richTextElement">
            <h6 class="font_6" style="line-height:normal; text-align:center; font-size:22px;">
              <span style="letter-spacing:normal;">Que hacemos?</span>
            </h6>
          </div>
        </div>  
        
        <div class="row">
          <div id="p_hacemos" class="_2Hij5 " data-testid="richTextElement">
            <p id="parrafo_historia" class="font_8" style="line-height:1.5em; text-align:center; font-size:15px;">
              <span style="letter-spacing:normal;">Nuestra tienda ayuda a las colitas callejeras, abandonadas o que necesitan rehabilitación.</span>
            </p>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-4 col-12 mt-5">
        <div class="row">
          <div id="col_horario" class="_2Hij5"  data-testid="richTextElement">
            <h6 class="font_6" style="line-height:normal; text-align:center; font-size:22px;">
              <span style="letter-spacing:normal;">Horario de atencion</span>
            </h6>
          </div>
        </div>  
        
        <div class="row">
          <div id="p_horario" class="_2Hij5 " data-testid="richTextElement">
            <p id="parrafo_historia" class="font_8" style="line-height:1.5em; text-align:center; font-size:15px;">
              <span style="letter-spacing:normal;">Puedes venir a nuestra sucursal y conocer a las colitas que están adopción</span>
            </p>
          </div>
        </div>
      </div>
    </div>
      
      
    
  </div>
  <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/validate.js/0.13.1/validate.min.js"></script>
  <script src="./js/index.js"></script>
</body>


<footer class="footer"> 
  <div id="row_footer" class="row">
    <div class=" col-lg-2 col-md-2 col-2 ">

    </div>
  
    <div class=" col-lg-4 col-md-4 col-4 mt-4 ">
      <div class="row" id="container_redes">
        <ul class="xb9fU" aria-label="Barra de redes sociales"></ul>
          <div class="col-lg-1 col-md-1 col-1">
            
              
                <a data-testid="linkElement" href="http://www.facebook.com/wix" target="_blank" class="_26AQd">
                  <wix-image id="img_0_comp-im1spqmd" class="_1-6YJ uWpzU" data-image-info="{&quot;containerId&quot;:&quot;dataItem-im1srga8-comp-im1spqmd&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;imageData&quot;:{&quot;width&quot;:200,&quot;height&quot;:200,&quot;uri&quot;:&quot;23fd2a2be53141ed810f4d3dcdcd01fa.png&quot;,&quot;displayMode&quot;:&quot;fill&quot;}}" data-has-bg-scroll-effect="" data-bg-effect-name="" data-is-svg="false" data-is-svg-mask="false" data-image-zoomed="" data-has-ssr-src="" data-src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_27,h_27,al_c,usm_0.66_1.00_0.01,enc_auto/23fd2a2be53141ed810f4d3dcdcd01fa.png">
                    <img src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_27,h_27,al_c,usm_0.66_1.00_0.01,enc_auto/23fd2a2be53141ed810f4d3dcdcd01fa.png" alt="White Facebook Icon" style="width:27px;height:27px;object-fit:cover;object-position:50% 50%">
                  </wix-image>
                </a>
              
          </div>    
          <div class="col-lg-1 col-md-1 col-1">
              
                <a data-testid="linkElement" href="https://www.instagram.com/wix/" target="_blank" class="_26AQd">
                  <wix-image id="img_1_comp-im1spqmd" class="_1-6YJ uWpzU" data-image-info="{&quot;containerId&quot;:&quot;dataItem-im1srga9-comp-im1spqmd&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;imageData&quot;:{&quot;width&quot;:200,&quot;height&quot;:200,&quot;uri&quot;:&quot;81af6121f84c41a5b4391d7d37fce12a.png&quot;,&quot;displayMode&quot;:&quot;fill&quot;}}" data-has-bg-scroll-effect="" data-bg-effect-name="" data-is-svg="false" data-is-svg-mask="false" data-image-zoomed="" data-has-ssr-src="" data-src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_27,h_27,al_c,usm_0.66_1.00_0.01,enc_auto/81af6121f84c41a5b4391d7d37fce12a.png">
                    <img src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_27,h_27,al_c,usm_0.66_1.00_0.01,enc_auto/81af6121f84c41a5b4391d7d37fce12a.png" alt="White Instagram Icon" style="width:27px;height:27px;object-fit:cover;object-position:50% 50%">
                </wix-image>
                </a>
              
          </div>
          <div class="col-lg-1 col-md-1 col-1">     
              
                <a data-testid="linkElement" href="http://www.twitter.com/wix" target="_blank" class="_26AQd">
                  <wix-image id="img_2_comp-im1spqmd" class="_1-6YJ uWpzU" data-image-info="{&quot;containerId&quot;:&quot;dataItem-im1srga91-comp-im1spqmd&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;imageData&quot;:{&quot;width&quot;:200,&quot;height&quot;:200,&quot;uri&quot;:&quot;01ab6619093f45388d66736ec22e5885.png&quot;,&quot;displayMode&quot;:&quot;fill&quot;}}" data-has-bg-scroll-effect="" data-bg-effect-name="" data-is-svg="false" data-is-svg-mask="false" data-image-zoomed="" data-has-ssr-src="" data-src="https://static.wixstatic.com/media/01ab6619093f45388d66736ec22e5885.png/v1/fill/w_27,h_27,al_c,usm_0.66_1.00_0.01,enc_auto/01ab6619093f45388d66736ec22e5885.png">
                    <img src="https://static.wixstatic.com/media/01ab6619093f45388d66736ec22e5885.png/v1/fill/w_27,h_27,al_c,usm_0.66_1.00_0.01,enc_auto/01ab6619093f45388d66736ec22e5885.png" alt="White Twitter Icon" style="width:27px;height:27px;object-fit:cover;object-position:50% 50%">
                  </wix-image>
                </a>
              
          </div>  
          <div class="col-lg-1 col-md-1 col-1">     
              
                <a data-testid="linkElement" href="http://youtube.com/user/Wix" target="_blank" class="_26AQd">
                  <wix-image id="img_3_comp-im1spqmd" class="_1-6YJ uWpzU" data-image-info="{&quot;containerId&quot;:&quot;dataItem-im1srgaa-comp-im1spqmd&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;imageData&quot;:{&quot;width&quot;:200,&quot;height&quot;:200,&quot;uri&quot;:&quot;203dcdc2ac8b48de89313f90d2a4cda1.png&quot;,&quot;displayMode&quot;:&quot;fill&quot;}}" data-has-bg-scroll-effect="" data-bg-effect-name="" data-is-svg="false" data-is-svg-mask="false" data-image-zoomed="" data-has-ssr-src="" data-src="https://static.wixstatic.com/media/203dcdc2ac8b48de89313f90d2a4cda1.png/v1/fill/w_27,h_27,al_c,usm_0.66_1.00_0.01,enc_auto/203dcdc2ac8b48de89313f90d2a4cda1.png">
                    <img src="https://static.wixstatic.com/media/203dcdc2ac8b48de89313f90d2a4cda1.png/v1/fill/w_27,h_27,al_c,usm_0.66_1.00_0.01,enc_auto/203dcdc2ac8b48de89313f90d2a4cda1.png" alt="White YouTube Icon" style="width:27px;height:27px;object-fit:cover;object-position:50% 50%">
                  </wix-image>
                </a>
              
          
          </div>
        </ul>
      </div>    
    </div>

    <div class=" col-lg col-md col  mt-4  ">
      <div class="row">
        <p class="font_7" style="font-size:15px; line-height:normal; text-align:center;">
          <span style="letter-spacing:normal;">
            <span class="color_8">
              <span class = "span_footer" style="font-size:15px;">123-456-7890 | 123-456-7890</span>
            </span>
          
          </span></p>
      </div>
      
      <div class="row">
        <p class="font_7" style="font-size:15px; line-height:normal; text-align:center;">
          <span style="letter-spacing:normal;">
            <span class="color_8">
              <span class = "span_footer" style="font-size:15px;">contacto@colitas.cl</span>
            </span>
          
          </span></p>
      </div>
      
      <div class="row">
        <p class="font_7" style="font-size:15px; line-height:normal; text-align:center;">
          <span style="letter-spacing:normal;">
            <span class="color_8">
              <span class = "span_footer" style="font-size:15px;">Av. Alonso ovalle #1500</span>
            </span>
          
          </span></p>
      </div>  
    </div>
  </div>
</footer>
</html>
