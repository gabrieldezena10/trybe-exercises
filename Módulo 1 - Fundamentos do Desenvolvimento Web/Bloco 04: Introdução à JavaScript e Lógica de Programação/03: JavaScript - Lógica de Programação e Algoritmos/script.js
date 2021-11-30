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
let n = 5;
let line = '';
let simbolo = '*';
let posicao = n;

for (index = 0; index < n; index +=1){

    for(let coluna =0; coluna <= n; coluna +=1){
        if(coluna<posicao){
                line = line + ' ';
        }else {
            line = line + simbolo;
        }
    }
    console.log(line)
    line = '';
    posicao -= 1;
}
