const superhero = {
  realName: 'Clark Kent',
  nickname: 'Superman',
  age: 30,
  powers: ['flight', 'super strength', 'x-ray vision'],
  isAlive: true,
  friends: {
    nickname: 'Batman',
    realName: 'Bruce Wayne',
    age: 35,
    powers: ['martial arts', 'intelligence'],
    isAlive: true,
  },
};

console.table(superhero);

// Desestructuración de un objeto
const { realName: realName, nickname, age } = superhero;

console.log('Name: ', realName, 'Nickname: ', nickname, 'Age: ', age);

// Desestructuración de un objeto anidado
const {
  friend: {
    realName: friendRealName,
    nickname: friendNickname,
    age: friendAge,
  },
} = superhero;

console.log(
  'Friend real name: ',
  friendRealName,
  'Friend nickname: ',
  friendNickname,
  'Friend age: ',
  friendAge
);

const superheroInfo = ({ nickname, age, range = 'Captain' }) => {
  console.log('Hello, ' + range + '!');

  return {
    superheroNickname: nickname,
    superheroAge: age,
  };
};

const { superheroNickname, superheroAge } = superheroInfo(superhero);
console.log('superhero: ', superheroNickname, 'superhero age: ', superheroAge);
