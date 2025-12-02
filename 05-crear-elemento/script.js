/* 

  Obtener in elemento de referencia. Este sera el nodo de HTML donde vamos a crear el nuevo elemento.

*/

const series = document.getElementById("series");
console.log(series);

/* 

  Para crear un nuevo elemento, usamos createElement

  Sintaxis

    document.createElement("tipoElemento");

*/

const nuevaSerie = document.createElement("li");

/* 

  Para agregar el elemento al DOM, tomamos el elemento de referencia y usamos el metodo append()

  Sintaxis

    elementoReferencia.append(nuevoElemento);

*/

series.append(nuevaSerie);

/* 

  Para agregarle contenido al nuevo elemento podemos usar innerText

*/

nuevaSerie.innerText = "Dr. House";

/* RETO */

nuevaSerie.classList.add("serie" , "fondo-dos"); // Agregamos mas clases separadas por comas ' , '

