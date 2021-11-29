//exercicio1
//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for(let index = 0; index <numbers.length; index += 1){
//     console.log(numbers[index]);
// }

//exercicio2
//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum=0;
// for(let index = 0; index <numbers.length; index += 1){
//     sum += numbers[index];
// }
// console.log(sum);

//exercicio3
//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;
// let average;
// for(let index = 0; index<numbers.length; index += 1 ){
//     sum += numbers[index];
// }
// average = sum/numbers.length;
// console.log(average);


//exercicio4
//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;
// let average;
// for(let index = 0; index<numbers.length; index += 1 ){
//     sum += numbers[index];
// }
// average = sum/numbers.length;

// if(average>20){
//     console.log('Valor maior que 20');
// } else {
//     console.log('Valor menor ou igual a 20')
// }

//exercicio5
//Utilizando for , descubra qual o maior valor contido no array e imprima-o;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// maiorValor = numbers[0];

// for (index = 1; index <numbers.length; index +=1){
//     if (numbers[index]>maiorValor){
//         maiorValor = numbers[index];
//     }
// }
// console.log(maiorValor);

//exercicio6
//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let count = 0;

// for (index=0; index<numbers.length; index +=1){
//     if(numbers[index]%2 ===1){
//         count += 1;
//     }
// }

// if(count === 0){
//     console.log('Nenhum valor ímpar encontrado')
// } else {
//     console.log(count);
// }



//exercicio7
//Utilizando for , descubra qual o menor valor contido no array e imprima-o;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// menorValor = numbers[0];

// for(index = 1; index < numbers.length; index +=1){
//     if(numbers[index]<menorValor){
//         menorValor = numbers[index];
//     }
// }
// console.log(menorValor);

//exercicio8
//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

// let array =[]
// for(index=1; index<=25; index +=1){
//     array.push(index);
// }
// console.log(array)

//exercicio9
//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

// let array =[]
// for(index=1; index<=25; index +=1){
//     divisaoPorDois = index/2;
//     array.push(divisaoPorDois);
// }
// console.log(array)

//OU

// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(array[index] / 2);
//   };