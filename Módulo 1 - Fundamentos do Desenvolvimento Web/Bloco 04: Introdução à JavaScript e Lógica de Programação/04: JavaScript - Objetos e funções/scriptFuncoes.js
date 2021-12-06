//Spoiler-alert : para os exercícios do dia, os métodos split , join e reverse podem ser muito úteis.


//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
/*
  Como podemos acessar a posição de uma string da mesma forma que
  acessamos um array, podemos então, comparar o caracter da
  posição 0 (primeira) com o caracter da última posição (length - 1).
  Dessa forma conseguimos verificar se a sequência de caracteres
  na string é a mesma do inicio ao fim e do fim ao inicio 😉
*/
// function verificaPalindromo (word){
//     for (let index in word){
//         if (word[index] === word[(word.length-1) - index]){

//         return true;
//     }
// }
//     return false;
// }
// console.log(verificaPalindromo('arara'));

// //OU

// function verificaPalindromo2(palavra){
//     let reverse = palavra.split('').reverse().join('');
//     if (reverse === palavra){
//         return true;
//     } else{
//         return false;
//     }
// }
// console.log(verificaPalindromo2('aranha'));

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Array de teste: [2, 3, 6, 7, 10, 1]; .
//Valor esperado no retorno da função: 4 .

// function arrayIndiceMaior(numeros){
//     let indiceMaior = 0;
//     for(let index in numeros){
//         if(numeros[index]> numeros[indiceMaior]){
//             indiceMaior = index;
//         }
//     }
//     return indiceMaior;
// }
// console.log(arrayIndiceMaior([7,1,6,9,13,5,20]));

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
//Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
//Valor esperado no retorno da função: 6 .

// function arrayIndiceMenor(numeros){
//     let indiceMenor = 0;
//     for(let index in numeros){
//      if(numeros[index]<numeros[indiceMenor]){
//          indiceMenor = index;
//      }
// }
// return indiceMenor;
// }
// console.log(arrayIndiceMenor([7,2,6,9,-13,5,20]));

//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
//Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
//Valor esperado no retorno da função: Fernanda .

// function arrayMaiorCaracteres(nomes){
//     let indiceMaior = 0;
//     for (let index in nomes){
//         if(nomes[index].length > nomes[indiceMaior].length){
//             indiceMaior = index;
//         }
//     }
//     return indiceMaior;
// }
// console.log(arrayMaiorCaracteres(['Andre','Joao','Gustavo','Ana','LucasFerrati','TiagoLux']));

//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
//Valor esperado no retorno da função: 2 .

// function maisRepetido(numeros) {
//     let contRepetido = 0;
//     let contNumero = 0;
//     let indexNumeroRepetido = 0;
//     for (let index in numeros) {
//       let verificaNumero = numeros[index];
//       for (let index2 in numeros) {
//         if (verificaNumero === numeros[index2]) {
//           contNumero += 1;
//         }
//       }
//       if (contNumero > contRepetido) {
//         contRepetido = contNumero;
//         indexNumeroRepetido = index;
//       }
//       contNumero = 0;
//     }
//     return numeros[indexNumeroRepetido];
//   }
//   console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); //2

  //6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
//Valor de teste: N = 5 .
//Valor esperado no retorno da função: 1+2+3+4+5 = 15 

// function somatorio(numero){
//     let total = 0;
//     for(index = 1; index <= numero; index +=1){
//         total = total +index;
//     }
//     return(total)
// }
// console.log(somatorio(3));

/* Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
Valor de teste: 'trybe' e 'be'
Valor esperado no retorno da função: true
verificaFimPalavra('trybe', 'be') ;
Retorno esperado: true
verificaFimPalavra('joaofernando', 'fernan') ;
Retorno esperado: false
*/

