// Esto es una función tradicional:
// Se declaran con la palabra reservada function y tienen un nombre.
// La sintaxis es más larga que la de las funciones de flecha y tienen su propio this.
// La función se puede llamar antes de ser declarada (Hoisting).
console.info(saludar('Reinaldo'));

function saludar(nombre) {
  return 'Hola ' + nombre;
}

// Esto es una expresión de función:
// Las expresiones de función son funciones que no tienen nombre y se asignan a una variable.
// La sintaxis es más larga que la de las funciones de flecha y tienen su propio this.
const saludar2 = function (nombre) {
  return 'Hola ' + nombre;
};

console.info(saludar2('Jireh'));

// Esto es una expresión de función de flecha:
// Las funciones de flecha son una forma más corta de escribir funciones.
// Se declaran con la palabra reservada const y se asignan a una variable.
// La sintaxis es más corta y no tienen su propio this.
const saludar3 = (nombre) => {
  return 'Hola ' + nombre;
};

console.info(saludar3('Licé'));

// Esto es una expresión de función de flecha con un solo parámetro y con un solo retorno:
// Si la función tiene un solo parámetro, se puede omitir los paréntesis.
// Si la función tiene un solo retorno, se puede omitir la palabra return y las llaves.
const saludar5 = (nombre) => 'Hola ' + nombre;

console.info(saludar5('Miranda'));

// Esto es una función de primera clase:
// Las funciones de primera clase son funciones que se pueden pasar como argumentos a otras funciones.
// Se pueden asignar a variables y se pueden devolver de otras funciones.
const saludar6 = (nombre) => 'Hola ' + nombre;

const saludar7 = (nombre, fn) => {
  console.info(fn(nombre));
};

saludar7('Valeria', saludar6);

// Esto es una función de orden superior:
// Las funciones de orden superior son funciones que reciben otras funciones como argumentos o que devuelven funciones como resultado.
const crearMultiplicador = (multiplicador) => (n) => n * multiplicador;

const porDos = crearMultiplicador(2);

console.info(porDos(5));

// Esto es una función recursiva:
// Las funciones recursivas son funciones que se llaman a sí mismas
// para resolver un problema.
const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.info(factorial(5));

// Esto es una función de callback:
// Las funciones de callback son funciones que se pasan como argumentos a otras funciones
// y se ejecutan después de que la función principal ha terminado de ejecutarse.
const saludar9 = (nombre, fn) => fn(nombre);

// Esto es una función de callback que se pasa como argumento a otra función.
const saludar10 = (nombre) => 'Hola ' + nombre;

console.info(saludar9('Reinaldo', saludar10));

// Esto es una función que retorna un objeto literal:
// Se ponen paréntesis después de la flecha para indicar que se va a retornar un objeto literal.
// Si no se ponen paréntesis, se interpreta como un bloque de código y no se retorna nada.
const crearPersona = (nombre, edad) => ({
  nombre,
  edad,
});

console.info(crearPersona('Reinaldo', 30));

// Esto es una función anónima autoejecutable:
// Las funciones anónimas autoejecutables son funciones que se ejecutan inmediatamente después de ser declaradas.
// Se declaran con la palabra reservada (function() {})() y no tienen nombre.
(() => {
  console.info('Hola desde una función anónima autoejecutable');
})();

// Esto es una función anónima autoejecutable con parámetros:
// Las funciones anónimas autoejecutables con parámetros son funciones que se ejecutan inmediatamente después de ser declaradas.
// Se declaran con la palabra reservada (function(parametros) {})() y no tienen nombre.
((nombre) => {
  console.info('Hola ' + nombre + ' desde una función anónima autoejecutable');
})('Reinaldo');

// Esto es una función anónima autoejecutable con parámetros y retorno:
// Las funciones anónimas autoejecutables con parámetros y retorno son funciones que se ejecutan inmediatamente después de ser declaradas.
// Se declaran con la palabra reservada (function(parametros) { return valor; })() y no tienen nombre.
((nombre) => {
  return 'Hola ' + nombre + ' desde una función anónima autoejecutable';
})('Reinaldo');

// Esto es una función de flecha anónima autoejecutable:
// Las funciones de flecha anónimas autoejecutables son funciones que se ejecutan inmediatamente después de ser declaradas.
// Se declaran con la palabra reservada (() => {})() y no tienen nombre.
// No tienen su propio this.
(() => {
  console.info('Hola desde una función de flecha anónima autoejecutable');
})();
