const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(15)
console.log(initialSum(5));

// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(5, console.log);

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(9, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});


//Para fixar
/*
No início, você tá declarando 3 funções que retornam as strings 'Acordando', 'Bora tomar cafe' e 'Partiu dormir', respectivamente. No meio, você tá declarando outra função, que recebe uma função como parâmetro, executa e guarda o retorno da função executada na variável resultado , sendo esse resultado impresso no console em seguida. Por fim, você executando a função do meio com as funções de cima como parâmetro.
*/
const frase1 = () => 'Acordando!!';
const frase2 = () => 'Bora tomar café!!';
const frase3 = () => 'Partiu dormir!!';

const doingThings = (callback) => {
  const result = callback();
  console.log(result);
}

doingThings(frase1);
doingThings(frase2);
doingThings(frase3);
