const personajesDragonBall = [
  'Goku',
  'Vegeta',
  'Gohan',
  'Piccolo',
  'Bulma',
  'Krillin',
  'Frieza',
  'Cell',
  'Majin Buu',
  'Trunks',
];

// Desestructuración de arreglos:
// La desestructuración de arreglos se hace de la misma manera que la de objetos, pero con corchetes.
// La diferencia radica en que necesitas usar el mismo orden en el que están los elementos del arreglo.
// En este caso, el primer elemento del arreglo se asigna a la primera variable, el segundo elemento a la segunda variable, y así sucesivamente.
// En caso de requerir un elemento que está después de otro, puedes usar comas para omitir los elementos que no necesitas.
const [goku, , gohan] = personajesDragonBall;

console.log(`Goku: ${goku}, Gohan: ${gohan}`);

//Si una función retorna un arreglo, puedes desestructurarlo de la misma manera que lo harías con un objeto.
const getDragonBallCharacters = () => {
  return [
    'Goku',
    'Vegeta',
    'Gohan',
    'Piccolo',
    'Bulma',
    'Krillin',
    'Frieza',
    'Cell',
    'Majin Buu',
    'Trunks',
  ];
};

const [, , , piccolo, , , , cell] = getDragonBallCharacters();

console.log(`Piccolo: ${piccolo}, Cell: ${cell}`);

// Desestructuración de arreglos anidados:
const personajesDragonBallAnidado = [
  ['Goku', 'Vegeta', 'Gohan'],
  ['Piccolo', 'Bulma', 'Krillin'],
  ['Frieza', 'Cell', 'Majin Buu'],
  ['Trunks'],
];
const [, [, bulma, krillin], [, , majinBuu]] = personajesDragonBallAnidado;
console.log(`Bulma: ${bulma}, Krillin: ${krillin}, Majin Buu: ${majinBuu}`);

// Desestructuración de arreglos con objetos:
// Si una función retorna un arreglo de objetos, puedes desestructurarlo de la misma manera que lo harías con un objeto.
// En este caso, puedes usar la misma sintaxis de desestructuración que usaste antes, pero ahora necesitas usar llaves para acceder a las propiedades del objeto.
const getDragonBallCharactersWithDescription = () => {
  return [
    {
      name: 'Goku',
      age: 30,
      power: 'Kamehameha',
    },
    {
      name: 'Vegeta',
      age: 35,
      power: 'Big Bang Attack',
    },
    {
      name: 'Gohan',
      age: 25,
      power: 'Masenko',
    },
  ];
};
const [, { name: vegeta, age: vegetaAge, power: vegetaPower }] =
  getDragonBallCharactersWithDescription();

console.log(`Vegeta: ${vegeta}, Age: ${vegetaAge}, Power: ${vegetaPower}`);

// Se puede desestructurar un arreglo de objetos y asignar el objeto a una variable:
const [, vegetaObj] = getDragonBallCharactersWithDescription();

console.log(vegetaObj);

// Desestructuración de un arreglo retornado por una función con paso de parámetros:
const getDragonBallCharacterArray = (character) => {
  return [character, 30, 'Kamehameha'];
};

const [characterName, characterAge, characterPower] =
  getDragonBallCharacterArray('Goku');

console.log(
  `Character: ${characterName}, Age: ${characterAge}, Power: ${characterPower}`
);
