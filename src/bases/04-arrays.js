const arr = [1];

// Si no hay problema con mutar el array, puedes usar el método push.
arr.push(2);
console.log(arr);

// Si no quieres mutar el array, puedes usar el operador spread.
const arr2 = [...arr, 3];
console.log(arr2);

// Si no quieres mutar el array, también puedes usar el método concat.
// Es preferible este método si el array es muy grande.
const arr3 = arr.concat(4);
console.log(arr3);

// Si no quieres mutar el array y quieres modificar todos sus elementos,
// puedes usar el método map.
const arr4 = arr.map((el) => el * 2);
console.log(arr4);

// Si no quieres mutar el array y quieres filtrar sus elementos,
// puedes usar el método filter.
const arr5 = arr.filter((el) => el > 0);
console.log(arr5);

// Si no quieres mutar el array y quieres reducir sus elementos,
// puedes usar el método reduce.
const arr6 = arr.reduce((acc, el) => acc + el, 0);
console.log(arr6);

// Si no quieres mutar el array y quieres encontrar un elemento,
// puedes usar el método find.
const arr7 = arr.find((el) => el > 0);
console.log(arr7);

// Si no quieres mutar el array y quieres encontrar el índice de un elemento,
// puedes usar el método findIndex.
const arr8 = arr.findIndex((el) => el > 0);
console.log(arr8);

// Si no quieres mutar el array y quieres invertir su orden,
// puedes usar el método reverse.
const arr12 = arr.reverse();
console.log(arr12);

// Si no quieres mutar el array y quieres ordenar sus elementos,
// puedes usar el método sort.
const arr13 = arr.sort((a, b) => a - b);
console.log(arr13);

// Si no quieres mutar el array y quieres obtener una porción de él,
// puedes usar el método slice.
const arr14 = arr.slice(0, 2);
console.log(arr14);

// Si no quieres mutar el array y quieres obtener una porción de él,
// puedes usar el método splice.
const arr15 = arr.splice(0, 2);
console.log(arr15);
