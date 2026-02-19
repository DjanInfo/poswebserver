const fs = require("fs")

function getTodosArtigos(){
    return JSON.parse(fs.readFileSync("artigos.json"))
}

function getArtigoPorId(id) {
    const artigos = JSON.parse(fs.readFileSync("artigos.json"))
    const artigoFiltrado = artigos.filter( artigo => artigo.id === id )[0]

return artigoFiltrado
}

function insereArtigo(artigoNovo){
    const artigos = JSON.parse(fs.readFileSync("artigos.json"))
    const novaListaDeArtigos = [ ...artigos, artigoNovo ]
    fs.writeFileSync("artigos.json",JSON.stringify(novaListaDeArtigos))
}

function modificaArtigo(modificacoes, id){
    let artigosAtuais = JSON.parse(fs.readFileSync("artigos.json"))
    const indiceModificado = artigosAtuais.findIndex(artigo =>artigo.id === id)
    const conteudoMudado = {...artigosAtuais[indiceModificado], ...modificacoes }
    artigosAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync("artigos.json", JSON.stringify(artigosAtuais))
}

function deletarArtigoPorId(id) {
    const artigos = JSON.parse(fs.readFileSync("artigos.json"))
    const artigosFiltrados = artigos.filter( artigo => artigo.id!== id )
    fs.writeFileSync("artigos.json", JSON.stringify(artigosFiltrados))
}


module.exports = {
    getTodosArtigos, getArtigoPorId, insereArtigo, modificaArtigo, deletarArtigoPorId
}