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
persona3.name = 'Cindy Abaddie';
persona3.age = 33;
persona3.occupation = 'Secretary';
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

console.table(persona4);
console.table(persona);
