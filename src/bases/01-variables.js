// const es inmutable:
// Las variables son inmutables cuando no se pueden cambiar su valor una vez que han sido declaradas.
// Se declaran con la palabra reservada const y no se pueden cambiar su valor.
const nombre = 'Reinaldo';

// let es mutable:
// Las variables son mutables cuando se pueden cambiar su valor una vez que han sido declaradas.
// Se declaran con la palabra reservada let y se pueden cambiar su valor.
let edad = 35;

const cumplio = true;


// Viejo método sin template strings.
console.info('Me llamo ' + nombre + ' y tengo ' + edad + ' años.')

// Se puede declarar una variable con el mismo nombre en distintos ámbitos de bloque.
if (cumplio) {
  const edad = 36;
  console.info('Cumplí ' + edad + ' años.');
}

// Aquí estamos redeclarando la variable edad, permitido por la palabra reservada let.
edad += 2;

console.info('Como estoy fuera del condicional entonces tengo ' + edad + ' años.');
