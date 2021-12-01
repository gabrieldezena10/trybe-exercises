//Exercicio 1
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let numeros of numbers){
//     console.log(numeros);
// }

// for (index = 0; index<numbers.length; index +=1){
//     console.log(numbers[index]);
// }

//Exercicio 2
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;

// for (let index = 0; index<numbers.length; index +=1){
//     sum += numbers[index];
// }
// console.log (sum);

//Exercício 3
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum =0;
// let average;

// for(let index = 0; index < numbers.length; index +=1){
//     sum += numbers[index]
// }
//     average = sum/numbers.length;
//     console.log (average);

//Exercicio4
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum =0;
// let average;

// for(let index = 0; index < numbers.length; index +=1){
//     sum += numbers[index]
// }
// average = sum/numbers.length;
//     if(average >20){
//         console.log('Valor maior que 20');
//     } else {
//         console.log ('valor menor ou igual a 20');
//     }


//Exercicio 5
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// maiorValor = 0;

// for (let index = 0; index<numbers.length; index +=1){
//     if(numbers[index]>maiorValor){
//         maiorValor = numbers[index];
//     }
// }
// console.log(maiorValor);


// for (let x of numbers){
//     if(x>maiorValor){
//         maiorValor = x
//     }
// }
// console.log(maiorValor);


//Exercicio6
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let count=0;

// for (let index = 0; index<numbers.length; index +=1){
//     if(numbers[index]%2===1){
//         count += 1;
//     }
// }
// if(count ===0){
//     console.log('nenhum valor ímpar encontrado');
// } else{
//     console.log(count);
// }

//exercicio7
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let menorValor = 110;

// for (let index = 0; index <numbers.length; index +=1){
//     if (numbers[index]<menorValor){
//         menorValor = numbers[index];
//     }
// }
// console.log(menorValor);

//exercicio8

// let array = []
// for (let index=1; index<=25; index +=1){
//     array.push(index)
// }
// console.log(array);


//exercicio9

let array = []
for (let index=1; index<=25; index +=1){
    array.push(index/2)
}
console.log(array);