//exercicio 1

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

// let n = 5;
// let line = '';
// let simbolo = '*';


// for (index = 0; index < n; index +=1){
//     line = line + simbolo;
//     console.log(line)
// }


//exercicio 3
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

let n = 5; //tamanho base
let line = '';
let simbolo = '*';
let meioPiramide = (n+1)/2;
//Precisa de duas variaveis para controlar os dois lados da pirâmide
let controleEsquerda = meioPiramide;
let controleDireita = meioPiramide;

//Loop para imprimir as linhas seguintes
// meio da piramide é a posição do centro da piramide
for (let index =0; index < meioPiramide; index += 1){

    //Loop para imprimir a primeira linha 
    for(let coluna =0; coluna <= n; coluna +=1){

        //A condição if abaixo é para construir os asteriscos do lado esquerdo e direito baseado no range deles.
            if(coluna >= controleEsquerda && coluna <= controleDireita){
                    line = line + simbolo;
            }else {
                line = line + ' ';
                }
            }
        console.log(line)  //imprime a linha em questão
        line = '';    // Zera o elemento line
        controleEsquerda -= 1; // Subtração para que a linha seguinte consiga aumentar o número de asteriscos
        controleDireita += 1; // Adição para que a linha seguinte consiga aumentar o número de asteriscos

        }