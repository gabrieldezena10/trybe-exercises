/* Exercicio 1
const a = 12;
const b = 6;

console.log("Soma: " + (a+b))
console.log("Subtração: " + (a-b))
console.log("Multiplicação: " + (a*b))
console.log("Divisão: " + (a/b))
console.log("Módulo: " + (a%b))
*/

/*Exercicio 2

const a = 13;
const b= 13;

if(a>b){
    console.log("Constante a é maior que b")
}else if (b>a){
    console.log("Constante b é maios que a")
}else{
    console.log("As constantes a e b são iguais")
}
*/

/*Exercicio 3

const a = 15;
const b= 12;
const c = 10;

if(a>b && a >c){
    console.log("O maior número é: " + a + " (a)")
}else if (b>a && b>c){
    console.log("O maior número é: " + b + " (b)")
}else if (c>a && c>b){
    console.log("O maior número é: " + c + " (c)")
}else{
    console.log("As constantes a, b e c são iguais")
}
*/

/* exercicio 4
const a = 0;

if (a>0){
    console.log("positive")
} else if (a<0){
    console.log("negative")
} else {
    console.log("zero")
}
*/

/* Exercicio 5
let alfa = 30;
let beta = 60;
let gama = 90;

let somaAngulo = alfa+beta+gama

let angulosPositivos = alfa>0 && beta>0 && gama>0;

if(angulosPositivos){
    if(somaAngulo===180){
        console.log("true")
    }else{
        console.log("false")
    }
} else {
    console.log("Erro: angulo errado")
}
*/

/* Exercicio 6

let nomePeca ="Torre";

switch (nomePeca.toLowerCase()){
    case'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
}
*/
/* exercicio 7
let nota =110;
if (nota >100 || nota <0){
    console.log("Erro na nota")
}else if (nota >=90){
    console.log("nota A")
} else if (nota >=80){
    console.log("Nota B")
} else if (nota >=70){
    console.log("Nota C")
} else if (nota >=60){
    console.log("Nota D")
}else if (nota >=50){
    console.log("Nota E")
}else if (nota <50){
    console.log("Nota F")
}
*/

/*
Exercicio 8
//Primeiro Modo
const a = 15;
const b = 4;
const c = 3;

if(a%2 === 0 || b%2===0 || c%2===0){
    console.log("true")
} else{
    console.log("false")
}

//Segundo modo
const a = 15;
const b = 4;
const c = 3;

let numeroPar = false;

if(a%2 === 0 || b%2===0 || c%2===0){
    numeroPar = true;
}
console.log(numeroPar);
*/

/*
//Exercicio 9

const a = 10;
const b = 4;
const c = 6;

let numeroImpar = false;

if(a%2 === 1 || b%2===1 || c%2===1){
    numeroImpar = true;
}
console.log(numeroImpar);
*/
/*
//Exercicio 10
const custo = 10;
const venda = 15;

let valoresPositivos = custo >0 && venda >0;

if(valoresPositivos){
    custoTotal = custo + custo*0.2;
    lucroTotal = (venda - custoTotal)*1000;

    console.log(lucroTotal)
} else{
    console.log("erro")
}
*/

/* Exercicio 11

const salarioBruto = 3000;
let aliqINSS;
let aliqIR;


if(salarioBruto <=1556.94){
    aliqINSS = salarioBruto*0.08
} else if (salarioBruto <= 2594.92){
    aliqINSS = salarioBruto*0.09
}else if (salarioBruto <= 5189,82){
    aliqINSS = salarioBruto*0.11
}else if (salarioBruto > 5189,82){
    aliqINSS = 570,88
}

salarioBase = salarioBruto-aliqINSS

if (salarioBase<=1903.98){
    aliqIR = 0;

}else if (salarioBase <=2826.65){
    aliqIR = (salarioBase*0.075)-142.80;


}else if (salarioBase <=3751.05){
    aliqIR = (salarioBase*0.15)-354.80;

}else if (salarioBase <=4664.68){
    aliqIR = (salarioBase*0.225)-636.13;

} else {
    aliqIR - (salarioBase*0.0275)-869.36;

};

console.log('R$'+ (salarioBase - aliqIR))

*/