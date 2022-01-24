/*
Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .
*/

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['ameixa', 'lichia', 'mexerica'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['creme de leite', 'açucar', 'morango'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const mix = [...specialFruit, ...additionalItens];
  return mix;
};

console.log(fruitSalad(specialFruit, additionalItens));

/*
[
  'ameixa',
  'lichia',
  'mexerica',
  'creme de leite',
  'açucar',
  'morango'
]
*/