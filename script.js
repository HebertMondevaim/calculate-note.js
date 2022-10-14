/* Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, 
deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso
 ou não em entrar no concurso e mostre uma mensagem na tela.

O resultado final desse desafio deve ser algo em torno de:
*/


  let students = [
  {
    name: "Hebert",
    note1: 10,
    note2: 10,
  },
  {
    name: "Sara",
    note1: 8,
    note2: 10,
  },
  {
    name: "Halef",
    note1: 2,
    note2: 5,
  },

]

function calculate(note1, note2) {
  let result = ((note1 + note2) / 2).toFixed(2)
  return result
}


function returnPrint(student) {
  let finalSore = calculate(student.note1, student.note2)
  if(finalSore >= 7) {
    alert(`A média do(a) aluno(a) ${student.name} é de ${finalSore}
    Parabéns ${student.name}. Você foi aprovado!`)
  } 
  else {
    alert(`A média do(a) aluno(a) ${student.name} é de ${calculate(student.note1, student.note2)}
    Não foi dessa vez ${student.name}. Tente novamente!`)
  }
}

for(let student of students) {
  returnPrint(student)
  
}
