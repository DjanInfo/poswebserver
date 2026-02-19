const fs = require("fs")

function getTodosAlunos(){
    return JSON.parse(fs.readFileSync("alunos.json"))
}

function getAlunoPorMatricula(matricula) {
    const alunos = JSON.parse(fs.readFileSync("alunos.json"))
    const alunoFiltrado = alunos.filter( aluno => aluno.matricula === matricula )[0]

return alunoFiltrado
}

function insereAluno(alunoNovo){
    const alunos = JSON.parse(fs.readFileSync("alunos.json"))
    const novaListaDeAlunos = [ ...alunos, alunoNovo ]
    fs.writeFileSync("alunos.json",JSON.stringify(novaListaDeAlunos))
}

function modificaAluno(modificacoes, matricula){
    let alunosAtuais = JSON.parse(fs.readFileSync("alunos.json"))
    const indiceModificado = alunosAtuais.findIndex(aluno =>aluno.matricula === matricula)
    const conteudoMudado = {...alunosAtuais[indiceModificado], ...modificacoes }
    alunosAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync("alunos.json", JSON.stringify(alunosAtuais))
}

function deletarAlunoPorMatricula(matricula) {
    const alunos = JSON.parse(fs.readFileSync("alunos.json"))
    const alunosFiltrados = alunos.filter( aluno => aluno.matricula!== matricula )
    fs.writeFileSync("alunos.json", JSON.stringify(alunosFiltrados))
}


module.exports = {
    getTodosAlunos, getAlunoPorMatricula, insereAluno, modificaAluno, deletarAlunoPorMatricula
}