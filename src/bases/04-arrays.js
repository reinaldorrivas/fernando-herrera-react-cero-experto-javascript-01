// Esto es un array, que es una colección de elementos.
// Un array es una colección de elementos ordenados.
// Un array puede contener cualquier tipo de dato, incluyendo otros arrays y objetos.
const arr = [1];

// Si no hay problema con mutar el array, puedes usar el método push.
// El método push es una forma de agregar un elemento al final de un array.
// El método push muta el array original y devuelve la nueva longitud del array.
// El método push recibe uno o más elementos como argumentos y los agrega al final del array.
arr.push(2);
console.log(arr);

// Si no quieres mutar el array y quieres agregar un elemento al final, puedes usar el operador spread.
// El operador spread es una forma de expandir un array en otro array.
const arr2 = [...arr, 3];
console.log(arr2);

// Si no quieres mutar el array y quieres agregar uno o varios elementos al final, puedes usar el método concat.
// El método concat es una forma de combinar dos o más arrays en uno nuevo.
// El método concat no muta el array original y devuelve un nuevo array.
// Es preferible este método si el array es muy grande.
const arr3 = arr.concat(4);
console.log(arr3);

// Si no quieres mutar el array y quieres modificar todos sus elementos, puedes usar el método map.
// El método map es una forma de transformar un array en otro array.
// El método map no muta el array original y devuelve un nuevo array.
const arr4 = arr.map((el) => el * 2);
console.log(arr4);

// Si no quieres mutar el array y quieres filtrar sus elementos, puedes usar el método filter.
// El método filter es una forma de filtrar un array en otro array.
// El método filter no muta el array original y devuelve un nuevo array.
// El método filter recibe una función que devuelve true o false.
// Si la función devuelve true, el elemento se incluye en el nuevo array.
// Si la función devuelve false, el elemento no se incluye en el nuevo array.
const arr5 = arr.filter((el) => el > 0);
console.log(arr5);

// Si no quieres mutar el array y quieres reducir sus elementos, puedes usar el método reduce.
// El método reduce es una forma de reducir un array a un solo valor.
// El método reduce no muta el array original y devuelve un nuevo valor.
// El método reduce recibe una función que recibe dos parámetros: el acumulador y el elemento actual.
// El acumulador es el valor que se va acumulando en cada iteración.
// El elemento actual es el elemento que se está procesando en la iteración actual.
// El método reduce también recibe un segundo parámetro que es el valor inicial del acumulador.
// Si no se proporciona un valor inicial, el primer elemento del array se usa como valor inicial del acumulador.
// El método reduce devuelve el valor final del acumulador.
const arr6 = arr.reduce((acc, el) => acc + el, 0);
console.log(arr6);

// Si no quieres mutar el array y quieres encontrar un elemento, puedes usar el método find.
// El método find es una forma de encontrar un elemento en un array.
// El método find no muta el array original y devuelve el primer elemento que cumple la condición.
// El método find recibe una función que devuelve true o false.
// Si la función devuelve true, el elemento se devuelve.
// Si la función devuelve false, el elemento no se devuelve.
// Si no se encuentra ningún elemento que cumpla la condición, el método find devuelve undefined.
// El método find devuelve el primer elemento que cumple la condición.
// El método find no devuelve un nuevo array, sino el primer elemento que cumple la condición.
const arr7 = arr.find((el) => el > 0);
console.log(arr7);

// Si no quieres mutar el array y quieres encontrar el índice de un elemento, puedes usar el método findIndex.
// El método findIndex es una forma de encontrar el índice de un elemento en un array.
// El método findIndex no muta el array original y devuelve el índice del primer elemento que cumple la condición.
// El método findIndex recibe una función que devuelve true o false.
// Si la función devuelve true, el índice del elemento se devuelve.
// Si la función devuelve false, el índice del elemento no se devuelve.
// Si no se encuentra ningún elemento que cumpla la condición, el método findIndex devuelve -1.
// El método findIndex devuelve el índice del primer elemento que cumple la condición.
// El método findIndex no devuelve un nuevo array, sino el índice del primer elemento que cumple la condición.
const arr8 = arr.findIndex((el) => el > 0);
console.log(arr8);

// Si quieres invertir el orden de un array, puedes usar el método reverse.
// El método reverse es una forma de invertir el orden de los elementos de un array.
// El método reverse muta el array original y devuelve el array invertido.
// Si no quieres mutar el array y quieres invertir el orden del mismo, puedes usar el operador spread antes de usar el método reverse.
const arr12 = [...arr].reverse();
console.log(arr12);

// Si quieres ordenar los elementos de un array, puedes usar el método sort.
// El método sort es una forma de ordenar los elementos de un array.
// El método sort muta el array original y devuelve el array ordenado.
// Si no quieres mutar el array y quieres ordenarlo, puedes usar el operador spread antes de usar el método sort.
// El callback es la condición de ordenamiento.
// Si no se proporciona un callback, el método sort ordena los elementos como cadenas de texto.
const arr13 = [...arr].sort((a, b) => a - b);
console.log(arr13);

// Si no quieres mutar el array y quieres obtener una porción de él, puedes usar el método slice.
// El método slice es una forma de obtener una porción de un array.
// El método slice no muta el array original y devuelve un nuevo array.
// El método slice recibe dos parámetros: el índice de inicio y el índice de fin.
// El índice de inicio es el índice del primer elemento que se incluye en el nuevo array.
// El índice de fin es el índice del primer elemento que no se incluye en el nuevo array.
// El método slice devuelve un nuevo array que contiene los elementos desde el índice de inicio hasta el índice de fin - 1.
// Si no se proporciona el índice de fin, el método slice devuelve todos los elementos desde el índice de inicio hasta el final del array.
// Si no se proporciona el índice de inicio, el método slice devuelve todos los elementos desde el principio del array hasta el índice de fin - 1.
// Si no se proporciona ningún índice, el método slice devuelve una copia del array original.
// Si se proporciona un índice negativo, el método slice cuenta desde el final del array.
// Lo que conlleva a que si trabajas de manera negativa, todos los parámetros deben ser negativos.
const arr14 = arr.slice(0, 2);
console.log(arr14);

// Si quieres obtener una porción de un array y eliminar elementos del mismo, puedes usar el método splice.
// El método splice es una forma de obtener una porción de un array y eliminar elementos del mismo.
// El método splice muta el array original y devuelve un nuevo array.
// El método splice recibe tres parámetros: el índice de inicio, el número de elementos a eliminar y los elementos a agregar.
// El índice de inicio es el índice del primer elemento que se incluye en el nuevo array.
// El número de elementos a eliminar es el número de elementos que se eliminan del array original.
// Los elementos a agregar son los elementos que se agregan al array original.
// El método splice devuelve un nuevo array que contiene los elementos eliminados del array original.
// Si no se proporciona el número de elementos a eliminar, el método splice elimina todos los elementos desde el índice de inicio hasta el final del array.
// Si no se proporciona el índice de inicio, el método splice elimina todos los elementos desde el principio del array hasta el número de elementos a eliminar.
// Si no se proporciona ningún índice, el método splice elimina todos los elementos del array original.
// Si se proporciona un índice negativo, el método splice cuenta desde el final del array.
// Lo que conlleva a que si trabajas de manera negativa, todos los parámetros deben ser negativos.
const arr15 = arr.splice(0, 2);
console.log(arr15);
