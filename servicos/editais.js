const fs = require("fs")

function getTodosEditais(){
    return JSON.parse(fs.readFileSync("editais.json"))
}

function getEditalPorId(id) {
    const editais = JSON.parse(fs.readFileSync("editais.json"))
    const editalFiltrado = editais.filter( edital => edital.id === id )[0]

return editalFiltrado
}

function insereEdital(editalNovo){
    const editais = JSON.parse(fs.readFileSync("editais.json"))
    const novaListaDeEditais = [ ...editais, editalNovo ]
    fs.writeFileSync("editais.json",JSON.stringify(novaListaDeEditais))
}

function modificaEdital(modificacoes, id){
    let editaisAtuais = JSON.parse(fs.readFileSync("editais.json"))
    const indiceModificado = editaisAtuais.findIndex(edital =>edital.id === id)
    const conteudoMudado = {...editaisAtuais[indiceModificado], ...modificacoes }
    editaisAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync("editais.json", JSON.stringify(editaisAtuais))
}

function deletarEditalPorId(id) {
    const editais = JSON.parse(fs.readFileSync("editais.json"))
    const editaisFiltrados = editais.filter( edital => edital.id!== id )
    fs.writeFileSync("editais.json", JSON.stringify(editaisFiltrados))
}


module.exports = {
    getTodosEditais, getEditalPorId, insereEdital, modificaEdital, deletarEditalPorId
}