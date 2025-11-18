/* Seleccionar al elemento seccion por su id */

const pokemones = document.getElementById('pokemones');

/* Mostramos por consola */

console.log(pokemones);

/* 

  innerText

  Devuelve un "string" del contenido visible dentro de un elemento 

  elemento.innerText 

  - Excluye los elementos ocultos
  - Excluye los espacio en el documento
  - Excluye las etiquetas de html

*/

console.log(pokemones.innerText);

/* 

  textContent

  Tambien devuelve un "string" del contenido visible dentro de un elemento.

    elemento.textContent

  - Si incluye los espacios
  - Incluye los elementos ocultos
  - Excluye ñas etiquetas HTML


*/

console.log(pokemones.textContent);

/* 

  innerHTML

  Devuelve uns "string" con la estructura interna del elemento seleccionador

    elemento.innertHTML

  - Incluir los espacios
  - Incluir los elementos ocultos
  - Incluye las etiquetas hmtl

*/

console.log(pokemones.innerHTML);

/* 

  Modificar innerText

  Asignar el valor al elemento seleccionado.

  elemento.innerText = "contenido en string";

*/

// pokemones.innerText = "Snorlax yo te elijo";

const subtitulo = document.querySelector("h2");
const enlace = document.querySelector("a");

subtitulo.innerText = "Mis Pokes Fav";
enlace.innerText = "Pika";

/* 

  Modificar el contenido de textContent

  Asignamos un valor al elemento seleccionado

    elemento.textContent = "string";

*/

subtitulo.textContent = "Mis Cuates";
enlace.textContent = "Bola de Fuego";

/* 

  Modificar el contenido con HTML

  Asignamos el valor al elemento seleccionado incluyendo etiquetas html.

    elemento.innerHTML = "<etiqueta>...</etiqueta>";


*/

subtitulo.innerHTML = "Amigos <span class='resalte'>Pokes</span>";
enlace.innerHTML = "Aun mas <span class='resalte'>Pokemones</span>";

/* 

  getAttribute()

  Devuelve el valor del atributo del elemento.

  elemento.getAttribute(atributo);


*/

console.log(enlace.getAttribute("href"));

/* 

  removeAttribute()

  Eliminamos el valor del atributo de un elemento

    elemento.removeAttribute(atrinuto);

  - El atributo pasa como string

*/

enlace.removeAttribute("href");
console.log(enlace.getAttribute("href"));

/* 

  setAttribute()
  
  Asigna un atrbuto y un valor a un elemento

    elemento.setAttribute(atributo , valor);

  - El atributo y valor pasan como string.
  - Sobreescribir un atributo ta declarado.
  - Crear un nuevo atributo y su valor


*/

enlace.setAttribute("href" , "https://youtube.com")
enlace.setAttribute("target" , "_blank")
console.log(enlace.getAttribute("href")); // pagina de youtube