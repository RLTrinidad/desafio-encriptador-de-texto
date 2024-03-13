//Encriptar

const campo_texto = document.querySelector("#texto-encriptado");
const campo_mensaje = document.querySelector("#campo-mensaje");
const botonCopiar = document.getElementById("#botonCopiar");

const matriz_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],                    
    ["u", "ufat"],
];

function btnEncriptar() {
    const texto = encriptar(campo_texto.value,true);
    campo_mensaje.value = texto;
}
function btnDesencriptar() {
    const texto = encriptar(campo_texto.value,false);
    campo_mensaje.value = texto;
}

function encriptar(fraseEncriptada,op){
	if(op){
		for (let i = 0; i <=4; i++) {
			if(fraseEncriptada.includes(matriz_code[i][0])) {
            fraseEncriptada = fraseEncriptada.replaceAll(matriz_code[i][0],matriz_code[i][1]);
			}
		}
	}else{
		for (let i = 4; i >= 0; i--) {
			if(fraseEncriptada.includes(matriz_code[i][1])){
            fraseEncriptada = fraseEncriptada.replaceAll(matriz_code[i][1],matriz_code[i][0]);
			}
		}
	}
    return fraseEncriptada;
}

// Boton de copiar
function btnCopiarTexto(){
    navigator.clipboard.writeText(campo_mensaje.value);
    console.log("Texto copiado: " + campo_mensaje.value);
}

function mostrar(){
    // Obtener el elemento oculto
    var elementosOcultos = document.getElementsByClassName("texto-copiado");

    // Iterar sobre los elementos ocultos y mostrarlos
    for (var i = 0; i < elementosOcultos.length; i++) {
        elementosOcultos[i].style.opacity = "1"; // Hacer el elemento visible
        setTimeout(function(elemento) {
            elemento.style.opacity = "0"; // Desvanecer el elemento después de 2 segundos
        }, 1000, elementosOcultos[i]);
    }
}



// Deshabilitar mayusculas

function mayus(e) {
    e.value = e.value.toLowerCase();
}


// Solo letras

function validarInput(input) {
    var valor = input.value;
    var nuevoValor = valor.replace(/[^A-Za-z\s]/g, '');
    input.value = nuevoValor;
}