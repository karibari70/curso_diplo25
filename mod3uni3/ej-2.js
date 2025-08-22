//  Declaro la variable que representa la distancia en metros
let distancia = 1000; // Podés cambiar este valor para probar otros casos

//  Declaro una variable para guardar el medio de transporte sugerido
let transporte;

//  determinar el transporte según la distancia
if (distancia >= 0 && distancia <= 1000) {
  transporte = "a pie"; 
} else if (distancia > 1000 && distancia <= 10000) {
  transporte = "bicicleta"; 
} else if (distancia > 10000 && distancia <= 30000) {
  transporte = "colectivo";
} else if (distancia > 30000 && distancia <= 100000) {
  transporte = "auto"; 
} else if (distancia > 100000) {
  transporte = "avión"; 
} else {
  transporte = "distancia inválida"; // Por si se ingresa un valor negativo
}

//  Mostrar el resultado en consola
console.log(`Para una distancia de ${distancia} metros, el medio de transporte recomendado es: ${transporte}.`);
