const nombre = 'Reinaldo';
let edad = 35;

const cumplio = true;


// Viejo método sin template strings
console.info('Me llamo ' + nombre + ' y tengo ' + edad + ' años.')


// Demostración de cómo las variables con nombres iguales se pueden llamar igual en distintos
// ámbitos de bloque.
if (cumplio) {
  const edad = 36;
  console.info('Cumplí ' + edad + ' años.');
}

console.info('Como estoy fuera del condicional entonces tengo ' + edad + ' años.');
