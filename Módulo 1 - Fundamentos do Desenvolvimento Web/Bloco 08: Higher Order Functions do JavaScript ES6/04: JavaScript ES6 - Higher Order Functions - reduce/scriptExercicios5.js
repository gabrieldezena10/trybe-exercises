//5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, item) =>
    acc + item.split('').reduce((acc2, letter)=> {
      if (letter ==='a' || letter === 'A') {
        return acc2 + 1;
      }
      return acc2
    },0),0);
};

console.log(containsA());
//20
