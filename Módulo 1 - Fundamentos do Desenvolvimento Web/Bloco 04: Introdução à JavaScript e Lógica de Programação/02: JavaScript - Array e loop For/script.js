
//Obtenha o valor "Serviços" do array menu :

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1] ;

console.log(menuServices);

//Procure o índice do valor "Portfólio" do array menu :
let menuu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menuu.indexOf('Portfólio')

console.log(indexOfPortfolio);

//Adicione o valor "Contato" no final do array menu :
let menuuu = ['Home', 'Serviços', 'Portfólio', 'Links'];
    menuuu.push('Contato');
console.log(menuuu);


//Utilize o for para imprimir os elementos da lista groceryList com o console.log() :

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(let i=0; i<groceryList.length; i +=1) {
    console.log(groceryList[i]);
}


//Utilize o for/of para imprimir os elementos da lista names com o console.log() :
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for(let nomeIndividual of names){
    console.log(nomeIndividual);
}