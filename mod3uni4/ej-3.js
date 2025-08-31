const producto = {
  id: 123,
  nombre: "Auriculares inalámbricos",
  precio: 120000,
  stock: 25,
  categoria: "Electrónica"
};

// a) Desestructuración
const { nombre, precio, stock } = producto;

// b) Mostrar en consola
console.log("Nombre del producto:", nombre);
console.log("Precio:", precio);
console.log("Stock disponible:", stock);
