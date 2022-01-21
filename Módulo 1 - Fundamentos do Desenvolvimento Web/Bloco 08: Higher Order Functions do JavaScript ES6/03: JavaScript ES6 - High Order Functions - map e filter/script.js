//filter

// const enviarEmail = (pessoaAprovada) => {
// 	const parte1 = `${pessoaAprovada.email}: Parabéns ${pessoaAprovada.nome}`;
// 		const mensagem = `${parte1} sua nota foi: ${pessoaAprovada.nota}`;
// 	console.log(mensagem);
// }

// const listaPessoasAprovadas = [
// 	{ nome: 'Jerry Mors', email: 'jessy@example.com', nota: 51},
// 	{ nome: 'Amanda Mors', email: 'amanda@example.com', nota: 151},
// 	{ nome: 'John Mors', email: 'jhon@example.com', nota: 91},
// 	{ nome: 'Bruna Mors', email: 'bruna@example.com', nota: 71},
// 	{ nome: 'Mike Mors', email: 'mike@example.com', nota: 129},
//   { nome: 'Julie Mors', email: 'julie@example.com', nota: 109},
// 	{ nome: 'Henry Mors', email: 'henry@example.com', nota: 116},

// ];

// const pessoasFiltradas = listaPessoasAprovadas.filter((pessoa) => pessoa.nota >= 100);

// pessoasFiltradas.forEach((pessoa) => enviarEmail(pessoa));

//map

const listaPessoasAprovadas2 = [
	'jessy@example.com',
	'amanda@example.com',
	'jhon@example.com',
	'bruna@example.com',
  'julie@example.com',
	'henry@example.com',
];
const enviarEmail2 = (objetoEmail) => {
  console.log(`email para ${objetoEmail.email} com a nota ${objetoEmail.nota} enviado com sucesso!`);
}

let listaDeEmails;

listaDeEmails = listaPessoasAprovadas2.map((email) => {
  return { email: email, nota: 10};
});

listaDeEmails.forEach((objetoEmail) => enviarEmail2(objetoEmail));

