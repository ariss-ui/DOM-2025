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