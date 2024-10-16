let alunos = ['Camila', 'Nayara', 'Jessica'];
alunos.push('Frank') // array.push() é a forma correta de inserir valores no final do array
let mesNascimento = [9, 4, 4];
mesNascimento.push(2);
let ehEstudante = [false, true, false];
ehEstudante.push(false);

// estrutura de repetição for(inicio, condição, incremento/decremento)
for(let i = 0; i < alunos.length; i++){
    mensagens.innerHTML += `<h1>Seja bem-vindo(a) ${alunos[i]}</h1>`;
}
