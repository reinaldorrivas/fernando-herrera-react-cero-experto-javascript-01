const nombre = 'Reinaldo';
const apellido = 'Rivas';

// Ejemplo de template strings
const greetings = `Hola, mi nombre es ${nombre} ${apellido}.`;

console.info(greetings);

// Ejemplo de template strings con funciones
const greetingsFunction = (nombre) => '¡Bienvenido ' + nombre + '!';

const greetingsText = `${greetingsFunction(
  nombre
)} Es de mi agrado informarle que esto es un ejemplo de template strings.`;

console.info(greetingsText);
