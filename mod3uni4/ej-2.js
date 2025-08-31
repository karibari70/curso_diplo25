const alumnos = [
  { nombre: 'Juan Gomez', nota: 7 },
  { nombre: 'Pedro Rodriguez', nota: 4 },
  { nombre: 'Roxana García', nota: 8 },
  { nombre: 'Luciano Lopez', nota: 5 },
  { nombre: 'Fernanda Gimenez', nota: 6 },
  { nombre: 'Florencia Martinez', nota: 10 },
  { nombre: 'Raul Sanchez', nota: 7 },
  { nombre: 'Sandra Figueroa', nota: 8 }
];

// Generar array de aprobados 
const aprobados = alumnos.filter(alumno => alumno.nota >= 7);

// Mostrar resultado
console.log("Alumnos aprobados:");
console.log(aprobados);
