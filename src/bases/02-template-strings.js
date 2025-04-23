const nombre = 'Reinaldo';
const apellido = 'Rivas';

// Ejemplo de template strings:
const greetings = `Hola, mi nombre es ${nombre} ${apellido}.`;

console.info(greetings);

// Ejemplo de un string tradicional en una función:
const greetingsFunction = (nombre) => '¡Bienvenido ' + nombre + '!';

// Ejemplo de un string tradicional en una función con template strings:
// Se pueden combinar ambos tipos de strings.
const greetingsText = `${greetingsFunction(
  nombre
)} Es de mi agrado informarle que esto es un ejemplo de template strings.`;

console.info(greetingsText);
