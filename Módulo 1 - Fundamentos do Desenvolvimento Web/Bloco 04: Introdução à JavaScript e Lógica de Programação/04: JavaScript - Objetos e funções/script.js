/* OBJETOS
1 - Crie um objeto player contendo as variáveis listadas abaixo.
Copiar
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
2 - Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
Copiar
[2006, 2007, 2008, 2009, 2010, 2018]
4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
Agora veremos uma variação do laço for , que nos garante facilidade ao lidar com objetos */

// let moradora = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3
//     },
//     bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
// }
// console.log(moradora);

// console.log('A jogadora '+ moradora['name']+' '+moradora['lastName']+ ' tem ' + moradora.age + ' anos de idade.');

// console.log('A jogadora '+ moradora['name']+' '+moradora['lastName']+ ' foi eleita a melhor do mundo por '+ moradora['bestInTheWorld'].length+' vezes');

// console.log('A jogadora possui '+ moradora['medals']['golden'] +' '+ 'medalhas de ouro e '+ moradora['medals']['silver']+ ' de prata.');

//FOR/IN
//1 - Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge' 
//   };


//2 - Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.

// for (let key in names){
//     console.log('Olá '+ names[key]);
// }

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

//   for (let key in car){
//       console.log(key, car[key]);
//   }


//FUNCOES

// function adicao(a,b){
//     return a + b;
// }
// console.log(adicao(3,9));

// function subtracao(a,b){
//     return a - b;
// }
// console.log(subtracao(3,9));

// function multiplicacao(a,b){
//     return a * b;
// }
// console.log(multiplicacao(3,9));

// function divisao(a,b){
//     return a / b;
// }
// console.log(divisao(3,9));

// function modulo(a,b){
//     return a % b;
// }
// console.log(modulo(3,9));

// function maiorQue (a,b) {
//     if(a > b){
//         return a + ' é maior que '+ b;
//     } else if (b > a) {
//         return b+ ' é maior que '+ a;
//     } else {
//         return 'Os numeros sao iguais';
//     }
// }
// console.log(maiorQue(15,16));

// function maiorQue (a,b,c) {
//     if(a > b && a > c){
//         return a + ' é maior que '+ b +' e ' + c;
//     } else if (b > a && b > c) {
//         return b+ ' é maior que '+ a + ' e '+ c;
//     } else {
//         return c+ ' é maior que '+ a + ' e '+ b;
//     }
// }
// console.log(maiorQue(15,16,17));

// function naturezaNumero(a){
//     if(a > 0){
//         return 'Positive'
//     } else if (a < 0) {
//         return 'Negative'
//     } else {
//         return 'Igual a 0'
//     }
// }
// console.log(naturezaNumero(0));

//Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// function angulos(a,b,c){
//     if(a > 0 && b > 0 && c > 0){
//         if (a + b + c === 180){
//             return ' Os ângulos dos triângulos são: '+ a + '°, '+b+ '° e '+ c+'°.'
//         } else{
//             return 'Ângulos inválidos'
//         }
// }else{
//     return('Erro, ângulo negativo')
// }
// }
// console.log(angulos(30,30,120));
