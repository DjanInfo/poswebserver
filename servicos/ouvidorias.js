const fs = require("fs")

function getTodosOuvidorias(){
    return JSON.parse(fs.readFileSync("ouvidorias.json"))
}

function getOuvidoriaPorId(id) {
    const ouvidorias = JSON.parse(fs.readFileSync("ouvidorias.json"))
    const ouvidoriaFiltrado = ouvidorias.filter( ouvidoria => ouvidoria.id === id )[0]

return ouvidoriaFiltrado
}

function insereOuvidoria(ouvidoriaNovo){
    const ouvidorias = JSON.parse(fs.readFileSync("ouvidorias.json"))
    const novaListaDeOuvidorias = [ ...ouvidorias, ouvidoriaNovo ]
    fs.writeFileSync("ouvidorias.json",JSON.stringify(novaListaDeOuvidorias))
}

function modificaOuvidoria(modificacoes, id){
    let ouvidoriasAtuais = JSON.parse(fs.readFileSync("ouvidorias.json"))
    const indiceModificado = ouvidoriasAtuais.findIndex(ouvidoria =>ouvidoria.id === id)
    const conteudoMudado = {...ouvidoriasAtuais[indiceModificado], ...modificacoes }
    ouvidoriasAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync("ouvidorias.json", JSON.stringify(ouvidoriasAtuais))
}

function deletarOuvidoriaPorId(id) {
    const ouvidorias = JSON.parse(fs.readFileSync("ouvidorias.json"))
    const ouvidoriasFiltrados = ouvidorias.filter( ouvidoria => ouvidoria.id!== id )
    fs.writeFileSync("ouvidorias.json", JSON.stringify(ouvidoriasFiltrados))
}


module.exports = {
    getTodosOuvidorias, getOuvidoriaPorId, insereOuvidoria, modificaOuvidoria, deletarOuvidoriaPorId
}