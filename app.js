//Variables que se utilizan a lo largo del juego
let numeroRandom = 0;
let intento = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

condicionesIniciales();

//Funcion que se encarga de agarrar una etiqueta y pasarle un texto
function asignarTextoElemento(elemento, texto){
    elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

//funcion que marca las condiciones iniciales del juego.
function condicionesIniciales() {

    asignarTextoElemento("h1","Juego de numero secreto");
    asignarTextoElemento("p", "Indica un numero 1 al 10");

    document.getElementById("iniciar").removeAttribute("disabled");
    numeroRandom = numeroAleatorio();
    intento = 1;
}
//Funcion para generar un numero aleatorio 
function numeroAleatorio() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if(numerosSorteados.length === numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos los numeros!");
        document.querySelector("#iniciar").setAttribute("disabled","false");
        
    }else{
        if (numerosSorteados.includes(numeroGenerado)) {
            return numeroAleatorio();
        }else{
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
//Funcion que contiene la logica del juego
function compararNumeros() {
    let numeroDelUsuario = parseInt(document.getElementById("numUser").value);
    
    if(numeroRandom === numeroDelUsuario){
        asignarTextoElemento("p", `Ganaste el juego, en ${intento} ${intento === 1 ? "vez!" : "veces!"}!`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if (numeroDelUsuario > numeroRandom) {
            asignarTextoElemento("p", "El numero debe ser menor!");
        }
        else{
            asignarTextoElemento("p", "El numero debe ser mayor!");
        }
        intento++;
        limpiarInput();
        
    }

}
//Funcion que limpia la etiqueta input
function limpiarInput() {
    document.querySelector("#numUser").value = "";
}
//Funcion que reinicia el juego
function reiniciarElJuego() {
    limpiarInput()
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}
