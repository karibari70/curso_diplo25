// Ejercicio 2: 
// Programar un contador de caracteres para un textarea.



const texto = document.getElementById('texto');
const contar = document.getElementById('contar');

texto.addEventListener('keyup', function () {
    contar.innerText = texto.value.length; /*cantidad de caracteres ingresados*/

})