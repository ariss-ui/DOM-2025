/* 

  Acceder al elemento de la lista

*/

const botanas = document.getElementsByTagName ("li");

console.log(botanas[0]);

/* 

  Propiedad classList

  Devuelve un DOM TOKEN LIST o Listado de Clases en el DOM. La lista de clases de un elemento html.

  sintaxis

    elemento.classList

  Podemos acceder a las clases a traves de su indice.

*/

console.log(botanas[0].classList); // DOM TOKEN LIST

console.log(botanas[0].classList[0]); // semilla

/* 

  Podemos agregar clases usando el metodo add()

  sintaxis

   elemento.classList.add("nombre-clase");

*/

botanas[2].classList.add("picante");
console.log(botanas[2].classList);

/* 

  Podemos verificar si existe una clase en un elemento con el metodo constains()

  Sintaxis

    elemento.classList.contains("nombre-clase");

  - Devuelve true si existe la clase
  - Devuelve false si no existe la clase

*/

console.log (botanas[1].classList.contains("botana"));
console.log (botanas[1].classList.contains("picante"));

/* 

  Podemos eliminar una clase usando el metodo remove()

  Sintaxis

    elemento.classList.remove("nombre-clase");
  
*/

botanas[3].classList.remove("botana");

console.log(botanas[3].classList);

