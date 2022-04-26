/* 
 1. Seleccionar todas las fichas
 2. Iterar sobre las fichas
 3. A cada ficha ponerle un eventListener de tipo click
 4. Dentro del callback, checkear si se pueder mover o no (si es que tiene el vacio alrededor).
 5. Si puede mover, lo movemos
 6. Si no se puede mover, no hacemos nada.
 7. Checkear si ganaste.
 */
//  1. Seleccionar todas las fichas
const fichas = document.querySelectorAll("td");

const checkearSiGanaste = () => {
  // return true / false
  const fichas = document.querySelectorAll("td");
  const textoFichas = Array.from(fichas).map((ficha) => +ficha.innerText);
  if (textoFichas.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0") {
    alert("GANASTE!!!");
  }
};

const moverFicha = (ficha) => {
  const valor = ficha.innerText;
  const vacio = document.querySelector(".empty");
  ficha.classList.add("empty");
  ficha.innerText = "";
  vacio.classList.remove("empty");
  vacio.innerText = valor;
};

const sePuedeMover = (ficha) => {
  const filaFicha = ficha.parentElement.rowIndex;
  const columnaFicha = ficha.cellIndex;

  const vacio = document.querySelector(".empty");
  const filaVacio = vacio.parentElement.rowIndex;
  const columnaVacio = vacio.cellIndex;

  return (
    (filaFicha - 1 === filaVacio && columnaFicha === columnaVacio) ||
    (columnaFicha + 1 === columnaVacio && filaFicha === filaVacio) ||
    (filaFicha + 1 === filaVacio && columnaFicha === columnaVacio) ||
    (columnaFicha - 1 === columnaVacio && filaFicha === filaVacio)
  );
};

// 2. Iterar sobre las fichas
fichas.forEach((ficha) => {
  //   3. A cada ficha ponerle un eventListener de tipo click
  ficha.addEventListener("click", () => {
    //  4. Dentro del callback, checkear si se pueder mover o no (si es que tiene el vacio alrededor).
    if (sePuedeMover(ficha)) {
      // 5. Si puede mover, lo movemos
      moverFicha(ficha);
      // 7. Checkear si ganaste.
      checkearSiGanaste();
    }
    // 6. Si no se puede mover, no hacemos nada.
  });
});
