// REFERENCIA DE EMOJI DEL CURSOR

const cursor = document.querySelector(".cursor");

// DETECTAMOS EL EVENTO DEL MOVIMIENTO DEL MOUSE

document.addEventListener("mousemove" , (e) => {
  // console.log(e.clientX);
  // console.log(e.clientY);

  // SE GUARDA EN UNA VARIABLE

  let mouseX = e.clientX - 5.4;
  let mouseY = e.clientY;

  cursor.style.left = `${mouseX}px`;
  cursor.style.top = `${mouseY}px`;


})

// DETECTAR EL EVENTO DE PRESIONAR UNA TECLA

document.addEventListener("keydown" , (e) => {
  // console.log(e.key)
  /* Usar switc para asignar el emoji al mouse */
  switch (e.key) {
    case "1":
      cursor.textContent = "👽";
      document.body.style.backgroundColor = "#00a357ff"
      break;
    case "2":
      document.body.style.backgroundColor = "#00325aff"
      cursor.textContent = "🍟";
      break;
    case "3":
      document.body.style.backgroundColor = "#e731ffff"
      cursor.textContent = "🖥️";
      break;
    case "4":
      document.body.style.backgroundColor = "#ff3fdfff"
      cursor.textContent = "🛹";
      break;
    default:
      document.body.style.backgroundColor = "#fffb1cff"
      cursor.textContent = "👾";
  }
});