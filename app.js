let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 100;
let maximoIntentos = 6

console.log(listaNumerosSorteados);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//Se añadio el colocar un maximoIntentos y se muestra mensaje de limite de intentos y cual era el numero secreto
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (intentos > maximoIntentos) {
        asignarTextoElemento('p', `Alcancaste el maximo de ${maximoIntentos} intentos, el numero secreto era ${numeroSecreto}`);
        document.getElementById('reiniciar').removeAttribute('disabled');   
    } else {
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Asertaste en ${intentos} ${(intentos === 1) ? "intento" : "intentos"} el numero es ${numeroSecreto}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', "El numero secreto es menor");
    } else {
        asignarTextoElemento('p', "El numero secreto es mayor");
    } }
    intentos++;
    limpiarCaja();
    }
    return;
}
//limpieza de caja
function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'ya se asignaron todos los numeros posibles')
    } else {

        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
//como arranca el juego al dar f5 o abrir de 0
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
//reinicio de juego
function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();