//Exercicios
//1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. crie um algoritmo que retorne o fatorial de 10.
// let n = 10;
// let fator = 1;
// for (let index = n; index >0 ; index -=1){
//     fator = fator*index
// }
// console.log(fator);

//2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// let word = 'tryber';
// let palavraReversa ='';

// for (let index = 0; index<word.length; index +=1){
//     palavraReversa = palavraReversa + word[(word.length)-1 - index];
//     console.log(palavraReversa);
// }
// console.log(palavraReversa);

//3 - Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let palavraMaior='';
// let palavraMenor='xxxxxxxxxx';

//   for(let index = 0; index<array.length; index +=1){
//     if(array[index].length > palavraMaior.length){
//       palavraMaior = array[index];
//     }

//     if(array[index].length < palavraMenor.length){
//       palavraMenor = array[index];
//   }
//   }
// console.log('A maior palavra é: '+ palavraMaior);
// console.log('A menor palavra é: '+ palavraMenor);


//4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
// let numPrimo = 0;

// for (let numAtual = 0; numAtual <=50; numAtual +=1){
//   let primo = true;
//   for (let divisor = 2; divisor< numAtual; divisor+=1){
//     if (numAtual%divisor === 0){
//       primo = false;
//     }
//   }
//   if (primo === true){
//     numPrimo = numAtual;
//     console.log(numPrimo);

//   }
// }
// console.log(numPrimo);

//Bônus
//exercicio 1
//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:


// let n =5; //linha dinâmica
// let line = '';
// let simbolo = '*';

// //Faz 1 linha com 5 asteriscos
// for(let index = 0; index<n; index+=1){
//     line = line + '*';
// }

// //Imprime 5 linhas com numero de asteriscos do loop acima
// for (let index=0; index<n; index +=1){
//     console.log(line);
// }

//exercicio 2
//2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// let n = 5;
// let line = '';
// let simbolo = '*';


// for (index = 0; index < n; index +=1){
//     line = line + simbolo;
//     console.log(line)
// }


//exercicio 3
//3- Agora inverta o lado do triângulo. Por exemplo:

// let n = 5;   //tamanho base e altura
// let line = '';
// let simbolo = '*';
// let posicao = n;


// //Loop para imprimir as linhas seguintes
// for (index = 0; index < n; index +=1){


//     //Loop para imprimir a primeira linha 
//     for(let coluna =0; coluna <= n; coluna +=1){
//         if(coluna<posicao){
//                 line = line + ' ';
//         }else {
//             line = line + simbolo;
//         }
//     }
//     console.log(line)  //imprime a linha em questão
//     line = '';    // Zera o elemento line
//     posicao -= 1; // Subtração para que a linha seguinte consiga aumentar o número de asteriscos

// }


//exercicio4
//4- Depois, faça uma pirâmide com n asteriscos de base:

// let n = 5; //tamanho base
// let line = '';
// let simbolo = '*';
// let meioPiramide = (n+1)/2;
// //Precisa de duas variaveis para controlar os dois lados da pirâmide
// let controleEsquerda = meioPiramide;
// let controleDireita = meioPiramide;

// //Loop para imprimir as linhas seguintes
// // meio da piramide é a posição do centro da piramide
// for (let index =0; index < meioPiramide; index += 1){

//     //Loop para imprimir a primeira linha 
//     for(let coluna =0; coluna <= n; coluna +=1){

//         //A condição if abaixo é para construir os asteriscos do lado esquerdo e direito baseado no range deles.
//             if(coluna >= controleEsquerda && coluna <= controleDireita){
//                     line = line + simbolo;
//             }else {
//                 line = line + ' ';
//                 }
//             }
//         console.log(line)  //imprime a linha em questão
//         line = '';    // Zera o elemento line
//         controleEsquerda -= 1; // Subtração para que a linha seguinte consiga aumentar o número de asteriscos
//         controleDireita += 1; // Adição para que a linha seguinte consiga aumentar o número de asteriscos

//         }


//Exercício 5 - Bônus
//5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:


// let n = 7;
// let middle = (n + 1) / 2;
// let controlLeft = middle;
// let controlRight = middle;
// let symbol = '*';


// for (let line = 1; line <= middle; line += 1) {
//     let outputLine = '';

//   for (let coluna = 1; coluna <= n; coluna += 1) {
//     if (coluna == controlLeft || coluna == controlRight || line == middle) {
//       outputLine += symbol;
//     } else {
//       outputLine += ' ';
//     }
//   }
//   controlLeft -= 1;
//   controlRight += 1;
//   console.log(outputLine);
// }


//Exercício 6 - Bônus
/*Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.*/

// let n = 12;
// let numeroDivisores = 0
// let array = [];

// for (let index = 1; index<=n; index+=1){
//   if (n % index ===0){
//     numeroDivisores +=1;
//     array.push(index);
//   }
// }
// console.log(array);

// if (numeroDivisores ===2){
//   console.log("O número", n ,"é primo");
// } else {
//   console.log("O número", n , "não é primo");
// }