const fs = require("fs")

function getTodosDocentes(){
    return JSON.parse(fs.readFileSync("docentes.json"))
}

function getDocentePorId(id) {
    const docentes = JSON.parse(fs.readFileSync("docentes.json"))
    const docenteFiltrado = docentes.filter( docente => docente.id === id )[0]

return docenteFiltrado
}

function insereDocente(docenteNovo){
    const docentes = JSON.parse(fs.readFileSync("docentes.json"))
    const novaListaDeDocentes = [ ...docentes, docenteNovo ]
    fs.writeFileSync("docentes.json",JSON.stringify(novaListaDeDocentes))
}

function modificaDocente(modificacoes, id){
    let docentesAtuais = JSON.parse(fs.readFileSync("docentes.json"))
    const indiceModificado = docentesAtuais.findIndex(docente =>docente.id === id)
    const conteudoMudado = {...docentesAtuais[indiceModificado], ...modificacoes }
    docentesAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync("docentes.json", JSON.stringify(docentesAtuais))
}

function deletarDocentePorId(id) {
    const docentes = JSON.parse(fs.readFileSync("docentes.json"))
    const docentesFiltrados = docentes.filter( docente => docente.id!== id )
    fs.writeFileSync("docentes.json", JSON.stringify(docentesFiltrados))
}


module.exports = {
    getTodosDocentes, getDocentePorId, insereDocente, modificaDocente, deletarDocentePorId
}