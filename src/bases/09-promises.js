import { getHeroById } from '../data/heroes';

const getHeroeByIdAsync = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroById(id);
      heroe ? resolve(heroe) : reject('No se pudo encontrar al héroe.');
    }, 2000);
  });

getHeroeByIdAsync(2).then(console.log).catch(console.warn);
