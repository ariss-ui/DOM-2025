/* 

  Eventos

  Es una accion o suceso que ocurre en el navegador o en un elemento de DOM. Puede ser iniciado por el usuario o por el sistema.

  Los eventos pueden ser manejados mediante javascript

  + Manejar eventos con JS

  1. Target (Objetivo o Blanco)
    Es el elemento del DOM en el que ha ocurrido el evento. Este se encuentra dentro de objeto evento (evet) y se accede mediante la propiedad event.target
  
  2. Event Listener (Escuchador del evento)
    Es el "oido" que esta atento a que ocurra un evento (target) en especifico. Usamos el metodo addEventListener para escichar los evento.


  3. Trigger (Disparador)
    Es el desencadenante que provoca que un evento ocurra. Es la accion que realiza el usuario o el sistema para activar el evento

    + Hacer Click
    + Mover el raton
    + Tipear Teclas
  
  4. Event Handler (Manejador de Evento)
    Es una funcion que se va a ejecutar cad vez que ocurre el evento. Con JS le decimos que va a ejecutar el manejado.

    + Mostrar mensajes
    + Cambiar un color
    + Agregar un elemento
    + Lanzar una alerta
  
  Sintaxis

    targer.eventListener( trigger , eventHandler );

  target -> elemento donde ocurre el evento
  listener -> escucha y detecta el evento
  trigger -> accion que ocurre en el evento
  handler -> funcion que se ejecuta al ocurrir el evento

*/

// Seleccionar un elemento

const button = document.getElementById("button");

// Manejar su Evento

button.addEventListener("click" , mostrarMensaje);

// Definir la funcion

function mostrarMensaje() {
  // Codigo que se ejecuta
  alert("ya vamonos sophia")
}


