// Este es un objeto literal, que es una forma de crear un objeto en JavaScript.
// Un objeto literal es una colección de propiedades y métodos.
// Un objeto es una colección de pares clave-valor.
// Las claves son cadenas de texto y los valores pueden ser de cualquier tipo.
// Un objeto puede contener otros objetos, arreglos y funciones.
const persona = {
  name: 'John Doe',
  age: 30,
  occupation: 'Software Developer',
  location: {
    city: 'New York',
    country: 'USA',
  },
};

console.table(persona);

// Esto es una copia por referencia, por lo que cualquier cambio en persona2 afectará a persona:
const persona2 = persona;

persona2.name = 'René Rivas';
persona2.age = 35;

console.table(persona2);
console.table(persona);

// Esto es una copia por valor, pero no es una copia profunda, por lo que cualquier cambio en los objetos anidados en persona3 afectará a persona:
const persona3 = { ...persona };
persona3.name = 'Valeria Rivas';
persona3.age = 5;
persona3.occupation = 'Estudiante';
persona3.location.city = 'Miranda';
persona3.location.country = 'Venezuela';

console.table(persona3);
console.table(persona);

// Esto es una copia profunda, por lo que cualquier cambio en persona4 no afectará a persona:
const persona4 = structuredClone(persona);
persona4.name = 'Miranda Rivas';
persona4.age = 9;
persona4.occupation = 'Estudiante';
persona4.location.city = 'Caracas';
persona4.location.country = 'Venezuela';

console.table(persona4);
console.table(persona);
