let miBody = document.getElementById("miBody");
let midDiv = document.getElementById("miDiv");


function HexagonoRandom() {
    //Donde vamos guardarlo 
    let hex = '#';
    //Los 6 lugares del hexagonos
    for (let i = 0; i < 6; i++) {
    //Crea los numero random para el hexagono desde 0 a 15
        let random = Math.random() * 16;
    //Rendonde para arriba para que no quede numero con coma
        let randomRedondeado = Math.round(random);
    //Aca mandamos a guardar los numero 
    //lo convierte en cadena de texto 
    //Cuando utilizas toString(16) en JavaScript, le estás 
    //diciendo al intérprete que convierta un número en su 
    //representación hexadecimal como una cadena de texto
        hex += randomRedondeado.toString(16);
    }
    return hex;
}
//Funcion para el boton
function cambiaColor(button) {
    let nuevoColor = HexagonoRandom();
    miBody.style.backgroundColor = nuevoColor;
    elementoNodo.textContent = nuevoColor
    console.log(nuevoColor);
}
//Centrar el boton y que muestre hexagonos
//que esta usando osea el color

 // Crear nodo y agregarlo al div
let elementoNodo = document.createElement("h1")
midDiv.appendChild(elementoNodo)




