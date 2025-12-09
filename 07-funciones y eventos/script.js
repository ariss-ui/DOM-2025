/* 

  Funciones y Eventos

  La funcion en un evento es el handler,. Es lo que se ejecuta cuando ocurre el evento.

  1. Evento con funcion declarada
    Esta funcion se escribe por fuera del evento y se pasa como argumento del listener.

    Sintaxis:
      
    target.elemento.evenListener( trigger , eventHandler );
    
    function eventHandler() {
      //codigo que se ejecuta
    }

*/

// REFERENCIAS

const declarada = document.getElementById('declarada');

// EVENTO CON FUNCION DECLARADA

declarada.addEventListener('click' , funcionDeclarada);
function funcionDeclarada() {
  console.log('hiciste click en e boton con funcion declarada')
}

/* 

  Evenco con Funcion Anonima

  La funcion se escribe dentro del evento y no tiene un nombre asignado.

  Sintaxis:
    target.addEventListener( trigger , function(){ // Codigo a ejecutar})

*/

// REFERENCIA

const anonima = document.getElementById('anonima');

// EVENTO CON FUNCION ANONIMA

anonima.addEventListener('click' , function() {
  console.log('Hiciste click en el boton con funcion anonima')
})

/* 

  Evento con Funcion Flecha

  Esta funcion se escribe tambien dentro del evento, no tiene nombre y es mas concisa.

  Sintaxis
    target.addEventListener( trigger , () => { // Codigo que se ejecuta })

  * Si el Codigo que se ejecuta tiene mas de una linea, se debe de escribir entre las llaves.
  * Si el codigo que se ejecuta solo tiene una linea, se pieden omitir las llaves.

*/

// REFERENCIA

const flecha = document.getElementById('flecha');
console.log(flecha);

// EVENTO CON FUNCION FLECHA

flecha.addEventListener('click' , () => {
  console.log('hiciste click en el boton con funcion flecha');
});