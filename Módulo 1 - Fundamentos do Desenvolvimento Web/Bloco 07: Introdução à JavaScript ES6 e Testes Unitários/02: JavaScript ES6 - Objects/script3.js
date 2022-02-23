const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//1. Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const newKey = (objeto, key, value) => {
  objeto[key]= value;
};

newKey(lesson2, 'turno', 'noite');

// console.log(lesson2);

//2- Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKeys = (objeto2) =>  Object.keys(objeto2);

// console.log(listKeys(lesson1));

//3- Crie uma função para mostrar o tamanho de um objeto.
const sizeObj = (obj3) =>  Object.keys(obj3).length;
// console.log(sizeObj(lesson1));

//4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listValues = (obj4) =>  Object.values(obj4);
// console.log(listValues(lesson1));

//5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// console.log(allLessons);


//6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const getNumberOfStudents = (obj6) => {
  let total = 0;
  const array = Object.keys(obj6);
  console.log(array); //[ 'lesson1', 'lesson2', 'lesson3' ]

  for (index in array) {
    total += obj6[array[index]].numeroEstudantes;
  }
  return total;
};
console.log(getNumberOfStudents(allLessons));

//7-Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const getValueByNumber = (obj,number) => Object.values(obj)[number];
console.log(getValueByNumber);

//8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));