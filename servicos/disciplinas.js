const fs = require("fs")

function getTodosDisciplinas(){
    return JSON.parse(fs.readFileSync("disciplinas.json"))
}

function getDisciplinaPorId(id) {
    const disciplinas = JSON.parse(fs.readFileSync("disciplinas.json"))
    const disciplinaFiltrado = disciplinas.filter( disciplina => disciplina.id === id )[0]

return disciplinaFiltrado
}

function insereDisciplina(disciplinaNovo){
    const disciplinas = JSON.parse(fs.readFileSync("disciplinas.json"))
    const novaListaDeDisciplinas = [ ...disciplinas, disciplinaNovo ]
    fs.writeFileSync("disciplinas.json",JSON.stringify(novaListaDeDisciplinas))
}

function modificaDisciplina(modificacoes, id){
    let disciplinasAtuais = JSON.parse(fs.readFileSync("disciplinas.json"))
    const indiceModificado = disciplinasAtuais.findIndex(disciplina =>disciplina.id === id)
    const conteudoMudado = {...disciplinasAtuais[indiceModificado], ...modificacoes }
    disciplinasAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync("disciplinas.json", JSON.stringify(disciplinasAtuais))
}

function deletarDisciplinaPorId(id) {
    const disciplinas = JSON.parse(fs.readFileSync("disciplinas.json"))
    const disciplinasFiltrados = disciplinas.filter( disciplina => disciplina.id!== id )
    fs.writeFileSync("disciplinas.json", JSON.stringify(disciplinasFiltrados))
}


module.exports = {
    getTodosDisciplinas, getDisciplinaPorId, insereDisciplina, modificaDisciplina, deletarDisciplinaPorId
}