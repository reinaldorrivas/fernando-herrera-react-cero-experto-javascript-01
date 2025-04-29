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
  getInfo: function () {
    return `Hello, my name is ${this.realName} and I am ${this.age} years old.`;
  },
};

console.table(superhero);

// Desestructuración de un objeto:
const { realName: realName, nickname, age } = superhero;

console.log('Name: ', realName, 'Nickname: ', nickname, 'Age: ', age);

// Desestructuración de un objeto anidado:
const {
  friends: {
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

// Desestructuración de un objeto retornado por una función:
const superheroInfo = ({ nickname, age, range = 'Captain' }) => {
  console.log('Hello, ' + range + '!');

  return {
    superheroNickname: nickname,
    superheroAge: age,
  };
};

const { superheroNickname, superheroAge } = superheroInfo(superhero);

console.log('superhero: ', superheroNickname, 'superhero age: ', superheroAge);

// Desestructuración de un objeto con función:
const { getInfo } = superhero;

console.log(getInfo());
