//2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
//Dica: use parâmetro rest .

// escreva sum abaixo
function sum (...nums) {
  return nums.reduce((acc, element) => (acc + element), 0);
}

console.log(sum(1,2,3,4,5));