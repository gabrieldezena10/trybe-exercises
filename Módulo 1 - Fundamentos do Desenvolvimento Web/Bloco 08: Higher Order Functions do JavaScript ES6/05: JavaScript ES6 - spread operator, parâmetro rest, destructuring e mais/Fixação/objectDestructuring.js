/*
1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise . Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator .
*/

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userInfos = {
  ...user,
  ...jobInfos,
}
console.log(userInfos);
/*
{
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL'
}
*/

//2 - Com o objeto em mãos, imprima no console uma frase de sua escolha utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals .

const {name, age, profession, squad} = userInfos;
console.log(`Bem vinda ${name} de ${age}. O seu cargo atual é ${profession} e seu squad é o ${squad}`);
//Bem vinda Maria de 21. O seu cargo atual é Software engineer e seu squad é o Rocket Landing Logic
