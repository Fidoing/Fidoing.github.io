window.addEventListener("load", function() {
  setTimeout(myFunction, 400);
});
window.addEventListener("load", function() {
  setTimeout(cerca, 1200);
});
window.addEventListener("load", function() {
  setTimeout(medio, 600);
});
window.addEventListener("load", function() {
  setTimeout(lejos, 100);
});

function myFunction() {
  document.getElementById("sure").style.opacity = "1";
}
function cerca() {
  document.getElementById("campo").style.opacity = "1";
}
function medio() {
  document.getElementById("campo-cerca").style.opacity = "1";
}
function lejos() {
  document.getElementById("campo-lejos").style.opacity = "1";
}
function inicio() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
});}
// Funcion de presentacion letra por letra 
// EN RESUMEN :
// Para llamar a la funcion se debe escribir presentarConDelay(Aqui se coloca el texto, La id del texto, Y por ultimo aca se coloca el delay inicial de la oracion);
function mostrarLetraPorLetra(oracion, idElemento) {
  let i = 0;
  const intervalId = setInterval(() => {
    if (i < oracion.length) {
      document.getElementById(idElemento).innerHTML += oracion.charAt(i);
      i++;
    } else {
      clearInterval(intervalId);
    }
  }, 100); // ACA ESTA EL DELAY LETRA POR LETRA
}

function presentarConDelay(oracion, idElemento,delay) {
  setTimeout(() => {
    mostrarLetraPorLetra(oracion, idElemento);
  }, delay); // OJO ACA ESTA EL DELAY INICIAL DE LA ORACION
}
var presentacion1 = "Hola!";
const presentacion2 = "soy Fidel,";
const presentacion3 = "desarrollador back-end";

var presentacion4 = "Hello!";
const presentacion5 = "I'm Fidel,";
const presentacion6 = "back-end developer";

presentarConDelay(presentacion1, 'presentacion1',300);
presentarConDelay(presentacion2, 'presentacion2',300);
presentarConDelay(presentacion3, 'presentacion3',300);


// *RECORDAR *
//  Aqui esta la funcion de desaparecer el texto scrolleando!: "desaparecer(Aca poner la id del texto, Y aca la distancia en pixeles de la camara)"
function desaparecer(textoId,distancia) {
  let lastScrollPosition = distancia;
  let texto = document.getElementById(textoId);
  const currentScrollPosition = window.pageYOffset;
  if (currentScrollPosition > lastScrollPosition) {
    texto.classList.add("oculto");
  } else {
    texto.classList.remove("oculto");
  }
  lastScrollPosition = currentScrollPosition;
}
// Aqui esta la funcion de APARECER el texto scrolleando!:
function aparecer(textoId,distancia) {
  let lastScrollPosition = distancia;
  let texto = document.getElementById(textoId);
  const currentScrollPosition = window.pageYOffset;
  if (currentScrollPosition > lastScrollPosition) {
    texto.classList.remove("oculto");

  } else {
    texto.classList.add("oculto");
  }
  lastScrollPosition = currentScrollPosition;
}


function aparecerTitulos(titulo,distancia) {
  let lastScrollPosition = distancia;
  let texto = document.getElementById(titulo);
  const currentScrollPosition = window.pageYOffset;
  if (currentScrollPosition > lastScrollPosition) {
    texto.classList.remove("reset-animation");
    texto.classList.add('animate');
    
    
  } else {
    texto.classList.add("reset-animation");
  }
  lastScrollPosition = currentScrollPosition;
}
function aparecerTitulosIzquierda(titulo,distancia) {
  let lastScrollPosition = distancia;
  let texto = document.getElementById(titulo);
  const currentScrollPosition = window.pageYOffset;
  if (currentScrollPosition > lastScrollPosition) {
    texto.classList.remove("reset-animationIz");
    texto.classList.add('animateIzquierda');
    
    
  } else {
    texto.classList.add("reset-animationIz");
  }
  lastScrollPosition = currentScrollPosition;
}

// ----------------TEXTOS OCULTOS QUE EVENTUALMENTE APARECEN GRACIAS A LA FUNCION APARECER----------------
window.addEventListener("scroll",function(){
  aparecer("div-proyectos",10 )
  document.getElementById("img-git").style.display= "block";
  
});
window.addEventListener("scroll",function(){
  aparecerTitulos("fondo",10);
});
window.addEventListener("scroll",function(){
  aparecerTitulosIzquierda("fondo2",350);
});
/*window.addEventListener("scroll",function(){
  if (window.innerWidth >= 991) {
    aparecer("asa",10);
  }
  
});*/
window.addEventListener("scroll",function(){
  aparecer("div-Habilidades",350);
});

// ----------------TEXTOS OCULTOS QUE EVENTUALMENTE APARECEN GRACIAS A LA FUNCION APARECER----------------
window.addEventListener("scroll",function(){
  desaparecer("presentacion",10);
})
window.addEventListener("scroll", function() {
  var distancia = window.pageYOffset;
  if (distancia < 10) { // Aquí se establece la distancia deseada en pixeles
    document.getElementById("img-git").style.display= "none";
  }
});

const boton = document.getElementById("menu-button");
var open = false
boton.addEventListener("click", abrirMenu)
function abrirMenu() {
  document.querySelector(".menu ul").style.display = "block"
  document.querySelector(".menu").style.left = "0%"
  document.querySelector(".invisible").style.opacity = "0.5"
  document.querySelector(".invisible").style.display = "block"
  open = true


}
var menuDesplegable = document.getElementsByClassName("menu")[0];

document.addEventListener("touchstart", function(event) {
  // Verificar si el toque ocurrió dentro del div
  if (!menuDesplegable.contains(event.target) && open == true) {
    // Ejecutar la acción que deseas realizar
    document.querySelector(".menu").style.left = ""
    document.querySelector(".invisible").style.opacity = "0"
    document.querySelector(".invisible").style.display = "none"
    open = false
    
  }
});

/*function onWindowResize() {
  if (window.innerWidth >= 991) {
    window.addEventListener("scroll",function(){
      desaparecer("campo",10);
    });
    window.addEventListener("scroll",function(){
      desaparecer("campo-cerca",10);
    });
    window.addEventListener("scroll",function(){
      desaparecer("campo-lejos",10);
    });
    
  }
  
}*/


function cambiarClase(hover) {
  var miDiv = document.getElementById("div-proyectos");
  var imagenes = miDiv.querySelectorAll(".primero");
  var imagen2 = document.getElementById("img-git");
  
  if (hover) {
    imagen2.style.opacity= "1";
    imagen2.style.cursor= "pointer";
 
    
    for (var i = 0; i < imagenes.length; i++) {
      imagenes[i].style.filter = "blur(2px)";
    }
  } else {
    imagen2.style.opacity= "0";
    for (var i = 0; i < imagenes.length; i++) {
      imagenes[i].style.filter = "";
    }
 
  }
}
// CAMBIAR ICONO DE LA MUSICA
const playButton = document.getElementById("play-button");

playButton.addEventListener("click", function() {
  if (playButton.classList.contains("fa-play-circle")) {
    playButton.classList.remove("fa-play-circle");
    playButton.classList.add("fa-stop-circle");
  } else {
    playButton.classList.remove("fa-stop-circle");
    playButton.classList.add("fa-play-circle");
  }
});
// ACCIONES DEL PLAY
const Musica = document.getElementById("myAudio");
var playing = false;
playButton.addEventListener("click", () => {
  let a = document.getElementById("circle");
  if (!playing){
    Musica.play();
    Musica.volume = 0.1;
    a.classList.add('cancion');
    playButton.classList.add("cancionBoton");
    playing = true;
  }
  else if(playing){
    Musica.pause();
    Musica.currentTime = 0;
    a.classList.remove('cancion');
    playButton.classList.remove("cancionBoton");
    playing = false;
  }
});
// TERMINO AUTOMATICO
Musica.addEventListener('ended', () => {
  // Aquí puedes agregar la acción que deseas realizar cuando termine la música
  let a = document.getElementById("circle");
  a.classList.remove('cancion')
  playButton.classList.remove("fa-stop-circle");
  playButton.classList.add("fa-play-circle");
});
const div1 = document.querySelector('#sure');
const div2 = document.querySelector('body');
if (window.innerWidth < 991) {
  playButton.addEventListener('click', function() {
    if (playButton.parentNode === div1) {
      div2.appendChild(playButton);
      playButton.classList.add("play-button-ESPECIAL")
    } else if (playButton.parentNode === div2){
      playButton.classList.remove("play-button-ESPECIAL")
      div1.appendChild(playButton);
      
    }
  });
}

/* ----------------------------------------CAMBIAR EL TEXTO A ESPANGLISH ----------------------------------------*/
var idioma= "español";

function cambiarIdioma(){

  const inicio = document.getElementById("inicio");
  const sobre = document.getElementById("sobreMi");
  const contacto = document.getElementById("contacto");
  const texto1 = document.getElementById("presentacion1");
  const texto2 = document.getElementById("presentacion2");
  const texto3 = document.getElementById("presentacion3");

  if (idioma == "español"){
    document.getElementById("textoProyecto").innerHTML = "My tkinter project uses the <span class='coloreo'>mysql-connect</span> API to create a program that makes it easy to add, remove, and lookup objects in a MySQL database. The graphical user interface created with Tkinter makes it easy to interact with the database and saves time compared to using SQL commands.<br><span class='coloreo'>-More projects on the way-";
    document.getElementById("fondo").innerHTML = "<img id='carpeta' src='img/carpeta.png'> PROJECTS";
    document.getElementById("fondo2").innerHTML = "<img id='carpeta2' src='img/habilidades.png'> SKILLS";
    document.getElementById("h2Habilidades").innerHTML = "PROGRAMMING LENGUAGES"
    document.getElementById("h2About").innerHTML = "ABOUT ME"
    document.getElementById("textoSobremi").innerHTML = 'Hi! I am a young enthusiast passionate about <span class="coloreo">programming</span> and <span class="coloreo">web development</span>.  I am constantly learning in a self-taught way and always seek to be up-to-date with the latest technologies and trends. I enjoy facing new challenges and finding creative solutions to problems. My goal is to develop high-quality projects that meet the client\'s needs and provide an excellent user experience.<br><br>Currently, I work on freelance projects and I am always open to new opportunities.   <br>Thanks for visiting my portfolio!'
    inicio.textContent = "Home";
    sobre.textContent = "About";
    contacto.textContent = "Contact";
    texto1.textContent = "";
    texto2.textContent = "";
    texto3.textContent = "";
    document.getElementById("h22").textContent = "Get in Touch";
    document.getElementById("also").textContent = "Also, you can contact me through these means!";
    document.getElementById("nombreLabel").textContent = "Name: ";
    document.getElementById("correoLabel").textContent = "E-mail: ";
    document.getElementById("mensajeLabel").textContent = "Message: ";
    document.getElementById("enviarLabel").value = "Send";
    presentarConDelay(presentacion4, 'presentacion1',300);
    presentarConDelay(presentacion5, 'presentacion2',300);
    presentarConDelay(presentacion6, 'presentacion3',300);
    idioma= "spanglish";
    document.getElementById("switch").style.opacity = "0.3";
    setTimeout(() => {
      idioma = "ingles";
      document.getElementById("switch").style.opacity = "1";
    }, 2400);
    
  }
  else if( idioma == "ingles"){
    texto1.textContent = "";
    texto2.textContent = "";
    texto3.textContent = "";
    presentarConDelay(presentacion1, 'presentacion1',300);
    presentarConDelay(presentacion2, 'presentacion2',300);
    presentarConDelay(presentacion3, 'presentacion3',300);
    document.getElementById("textoProyecto").innerHTML = "Mi proyecto en tkinter utiliza la API <span class='coloreo'>mysql-connect</span> para crear un programa que permite agregar, quitar y buscar objetos en una base de datos MySQL de manera sencilla. La interfaz gráfica de usuario creada con Tkinter facilita la interacción con la base de datos y ahorra tiempo en comparación con el uso de comandos SQL.<br><span class='coloreo'>-Más proyectos en camino-";
    document.getElementById("fondo").innerHTML = "<img id='carpeta' src='img/carpeta.png'> PROYECTOS";
    document.getElementById("fondo2").innerHTML = "<img id='carpeta2' src='img/habilidades.png'> HABILIDADES";
    document.getElementById("h2Habilidades").innerHTML = "LENGUAJES DE PROGRAMACION"
    document.getElementById("h2About").innerHTML = "SOBRE MI"
    document.getElementById("textoSobremi").innerHTML = '¡Hola! Soy un joven apasionado por la  <span class="coloreo">programación</span> y el <span class="coloreo">desarrollo web</span>. Aprendo constantemente de manera autodidacta y busco siempre estar al día con las últimas tecnologías y tendencias. Me gusta enfrentar nuevos desafíos y encontrar soluciones creativas a los problemas. Mi objetivo es desarrollar proyectos de calidad que cumplan con las necesidades del cliente y brinden una excelente experiencia de usuario.<br><br>Actualmente trabajo en proyectos freelance y siempre estoy abierto a nuevas oportunidades.<br>¡Gracias por visitar mi portafolio!</span>'
    inicio.textContent = "Inicio";
    sobre.textContent = "Acerca de";
    contacto.textContent = "Contacto";
    document.getElementById("h22").textContent = "Contacto";
    document.getElementById("also").textContent = "Tambien puedes contactarme por estos medios!";
    document.getElementById("nombreLabel").textContent = "Nombre: ";
    document.getElementById("correoLabel").textContent = "Correo: ";
    document.getElementById("mensajeLabel").textContent = "Mensaje: ";
    document.getElementById("enviarLabel").value = "Enviar";
    idioma = "spanglish";
    document.getElementById("switch").style.opacity = "0.3";
    setTimeout(() => {
      idioma = "español";
      document.getElementById("switch").style.opacity = "1";
    }, 2400);

  }
}
/* ----------------------------------------CAMBIAR EL TEXTO A ESPANGLISH ----------------------------------------*/
setTimeout(() => {
  document.getElementById("switch").style.display = "block";
}, 3000);
setTimeout(() => {
  document.getElementById("switch").style.opacity = "1";
}, 3100);

/* ----------------------------------------BOTON  DE  INICIO ----------------------------------------*/
function desaparecerAboutDisplay(){
  var seccionAbout = document.getElementById("about");
  var elementosAbout = seccionAbout.querySelectorAll("*");
  let activo = document.getElementById("sobreMi");
  activo.classList.add("deshabilitado");
  let activoSelf = document.getElementById("inicio");
  activoSelf.classList.add("deshabilitado");
  let activoOther = document.getElementById("contacto");
  activoOther.classList.add("deshabilitado");
  setTimeout(function (){
    for (let i = 0; i < elementosAbout.length; i++) {
      elementosAbout[i].classList.add("opacity-0");
  }},10)
  setTimeout(function (){
    for (let i = 0; i < elementosAbout.length; i++) {
      elementosAbout[i].classList.add("display-none");
    }
    activo.classList.remove("deshabilitado");
    activoSelf.classList.remove("deshabilitado");
    activoOther.classList.remove("deshabilitado");
  },900)
  
}
function aparecerInicioDisplay(){
  var seccion = document.getElementById("home");
  var elementos = seccion.querySelectorAll("*");
  
  setTimeout(function(){
    for (let h = 0; h < elementos.length; h++) {
      elementos[h].style.display = "";
    }
  },10)
  setTimeout(function (){
    for (let l = 0; l < elementos.length; l++) {
      elementos[l].style.opacity = "";
    }
  },100)
  
}



/* ----------------------------------------BOTON  DE  INICIO ----------------------------------------*/
/* ----------------------------------------BOTON  DE  SOBRE MI ----------------------------------------*/

function desaparecerInicioDisplay(){
  var seccion = document.getElementById("home");
  var elementos = seccion.querySelectorAll("*");
  let activo = document.getElementById("inicio");
  activo.classList.add("deshabilitado");
  let activoSelf = document.getElementById("sobreMi");
  activoSelf.classList.add("deshabilitado");
  let activoOther = document.getElementById("contacto");
  activoOther.classList.add("deshabilitado");
  
  setTimeout(function(){
    
    for (var k = 0; k < elementos.length; k++) {
      elementos[k].style.transition= "opacity 1s ease-in-out";
      elementos[k].style.opacity = "0";
    }
  },10)
  setTimeout(function (){
    for (let p = 0; p < elementos.length; p++) {
      elementos[p].style.display = "none";  
    }
    activo.classList.remove("deshabilitado");
    activoSelf.classList.remove("deshabilitado");
    activoOther.classList.remove("deshabilitado");
  },900)  
}

function aparecerAboutDisplay(){
  var seccionAbout = document.getElementById("about");
  var elementosAbout = seccionAbout.querySelectorAll("*");
  setTimeout(function (){
    for (let i = 0; i < elementosAbout.length; i++) {
      elementosAbout[i].classList.remove("display-none");
    }
  },10)
  setTimeout(function (){
    for (let i = 0; i < elementosAbout.length; i++) {
      elementosAbout[i].classList.remove("opacity-0");
  }},50)
}  



/* ----------------------------------------BOTON  DE  SOBREMI ----------------------------------------*/
/* ----------------------------------------BOTON  DE  CONTACTO ----------------------------------------*/

function desaparecerContactDisplay(){
  var seccionAbout = document.getElementById("contact");
  var elementosAbout = seccionAbout.querySelectorAll("*");
  let activo = document.getElementById("sobreMi");
  activo.classList.add("deshabilitado");
  let activoOther = document.getElementById("inicio");
  activoOther.classList.add("deshabilitado");
  let activoSelf = document.getElementById("contacto");
  activoSelf.classList.add("deshabilitado");
  setTimeout(function (){
    for (let i = 0; i < elementosAbout.length; i++) {
      elementosAbout[i].classList.add("opacity-0");
  }},10)
  setTimeout(function (){
    for (let i = 0; i < elementosAbout.length; i++) {
      elementosAbout[i].classList.add("display-none");
    }
    activo.classList.remove("deshabilitado");
    activoOther.classList.remove("deshabilitado");
    activoSelf.classList.remove("deshabilitado");
  },900)
  
}

function aparecerContactDisplay(){
  var seccionContact = document.getElementById("contact");
  var elementosContact = seccionContact.querySelectorAll("*");
  setTimeout(function (){
    for (let i = 0; i < elementosContact.length; i++) {
      elementosContact[i].classList.remove("display-none");
    }
  },10)
  setTimeout(function (){
    for (let i = 0; i < elementosContact.length; i++) {
      elementosContact[i].classList.remove("opacity-0");
  }},50)
}
/* ----------------------------------------BOTON  DE  CONTACTO ----------------------------------------*/  
