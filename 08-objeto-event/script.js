/* 

  Objeto Event

  El objeto  evento (e) es la representacion de un suceso que ocurre en el navegador, como un click, pulsar una tecla o el movimiento del mouse. Nos proporciona informacion sobre las propiedades y metodos para manipularlo

  Para acceder al objeto event (e) se pasa como argumento de la funcion manejadora (handler)

  Sintaxis:
    function handler(e) {
      // Codigo que se ejecuta
    }

  Algunas de las propiedades del objeto:

  type -> devolver el tipo de evento
  target -> devolver el elemento donde ocurre el evento
  timeStamp -> devuele la marca de tiempo en milisegundos desde la carga de la pagina
  code -> devuelve el codigo de la tecla presionada
  key -> devuelve el valor de la tecla presionada

  clientX -> devuelve la posicion horizontal del puntero del mouse en relacion a la ventana del navegador
  clientY -> devuelve la poscion vertical del puntero del mouse en relacion a la ventana del navegador


*/

// REFERENCIA 

const apachurra = document.getElementById('apachurra');

// EVENTO

apachurra.addEventListener('click' , mostrarObjetoEvento );

// FUNCION

function mostrarObjetoEvento(event) {
  // Codifo que se ejecuta
  console.log(event)
  // Para acceder a las propiedades con .
  console.log(event.type);
  console.log(event.target);
  console.log(event.timeStamp);
  console.log(event.target.innerText);
}

// EVENTO DE TECLAS

document.addEventListener('keydown' , function(e) {
  // Codigo que se ejecuta cuando el usuario presione una tecla
  console.log(e);
  console.log(e.type);
  console.log(e.code);
  console.log(e.key);
})

// EVENTO DE MOUSE

document.addEventListener('mousemove' , (e) => {
  // Codigo que se ejecuta
  // console.log(e);
  // console.log(e.type);
  // console.log(e.clientX);
  // console.log(e.clientY);
  console.log(`Coordenadas de mi mouse son X: ${e.clientX} y de Y: ${e.clientY} y puse eso!`);
})