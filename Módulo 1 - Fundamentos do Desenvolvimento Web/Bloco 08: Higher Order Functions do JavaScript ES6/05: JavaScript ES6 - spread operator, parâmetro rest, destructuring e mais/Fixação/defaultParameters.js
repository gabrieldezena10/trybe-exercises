//Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.

const multiply = (number = 1, value =1) => {
  // Escreva aqui a sua função
  let result = number*value;
  return result;
};

console.log(multiply());