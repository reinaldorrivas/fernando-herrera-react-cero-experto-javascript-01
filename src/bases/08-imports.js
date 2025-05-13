import heroes, { owners, getHeroById, getHeroesByOwner } from '../data/heroes';

console.log(heroes);

console.log(getHeroById(2));

const [dc] = owners;

console.log(getHeroesByOwner(dc));
