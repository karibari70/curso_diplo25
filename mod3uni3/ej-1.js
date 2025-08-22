//  Declaro las variables 
let producto = "Lavarropas"; // Nombre del producto (tipo string)
let precio = 12999; // Precio del producto (tipo number)
let disponible = false; // Disponibilidad del producto (tipo boolean)


//  Evaluar la disponibilidad 

let disponibilidadTexto;

if (disponible === true) {
  disponibilidadTexto = "Disponible"; 
} else {
  disponibilidadTexto = "Agotado"; 
}
//  Mostrar el mensaje completo 

console.log(`El ${producto} cuesta ${precio} y su disponibilidad es: ${disponibilidadTexto}.`);

