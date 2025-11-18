/* 

  Seleccionar el h1 a travez de su clase


*/

const titulo = document.querySelector(".titulo");

/* 

  Mostrar el nodo seleccionado

*/

console.log(titulo);

/* 

  Objeto Style

  Podemos acceder a este objeto usando la notacion de punto.

    nodo.style

  Como resultado nos da un CSS Style declaration. Es decir, nos va a dar una lista que representa todas las propiedades de estilo de un elemento.

  Las propiedades cambian del formato kebab-case a camelCase

  Unicamente muestra el calor de los elementos en linea declarados directamente en el elemento HTML

*/

console.log(titulo.style);

/* 

  Para acceder a las propiedades de estilo, usamos la notacion de (.)

    nodo.style.nombrePropiedad

*/

console.log("El color del titulo es: " + titulo.style.color);

/* 

  Asignar un valor a la propiedad de estilo del nodo seleccionado.

    node.style.colo = valor

*/

titulo.style.color = "pink";
titulo.style.backgroundColor = "purple"
titulo.style.fontSize = "48px";

/* 

  Metodo setProperty()

  Asignamos una propiedad de estilo a un elemento seleccionado.

  Sintaxis
    elemento.style.setProperty(nombrePropiedad , valor , important);

    - Es mas flexible y por lo tanto mas usado.
    - Las propiedades se escriben en kebab-base
    - El parametro "important" es opcional


*/

titulo.style.setProperty('color' , 'cornflowerblue');
titulo.style.setProperty('background-color' , 'darkgreen' , 'important');

/* 

  Formas de eliminar los vallores de propiedades del nodo seleccionado

  nodo.style.nombrePropiedad = ""  // Asignamos una cadena vacia

  En esta sintaxis, la propiedad de CSS va en formato camelCase.


*/

// titulo.style.color = "";
// titulo.style.backgroundColor = "";

/* 

  Metodo removeProperty();

  Esto elimina la propiedad de estilos.

  Sintaxis
    elemento.style.removeProperty(nombre-propiedad)

    El nombre de la propiedad en formato kebab-case

*/

titulo.style.removeProperty('color');
titulo.style.removeProperty('background-color');
titulo.style.removeProperty('font-size');