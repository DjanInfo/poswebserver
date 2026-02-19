const fs = require("fs")

function getTodosInscricoes(){
    return JSON.parse(fs.readFileSync("inscricoes.json"))
}

function getInscricaoPorId(id) {
    const inscricoes = JSON.parse(fs.readFileSync("inscricoes.json"))
    const inscricaoFiltrado = inscricoes.filter( inscricao => inscricao.id === id )[0]

return inscricaoFiltrado
}

function insereInscricao(inscricaoNovo){
    const inscricoes = JSON.parse(fs.readFileSync("inscricoes.json"))
    const novaListaDeInscricoes = [ ...inscricoes, inscricaoNovo ]
    fs.writeFileSync("inscricoes.json",JSON.stringify(novaListaDeInscricoes))
}

function modificaInscricao(modificacoes, id){
    let inscricoesAtuais = JSON.parse(fs.readFileSync("inscricoes.json"))
    const indiceModificado = inscricoesAtuais.findIndex(inscricao =>inscricao.id === id)
    const conteudoMudado = {...inscricoesAtuais[indiceModificado], ...modificacoes }
    inscricoesAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync("inscricoes.json", JSON.stringify(inscricoesAtuais))
}

function deletarInscricaoPorId(id) {
    const inscricoes = JSON.parse(fs.readFileSync("inscricoes.json"))
    const inscricoesFiltrados = inscricoes.filter( inscricao => inscricao.id!== id )
    fs.writeFileSync("inscricoes.json", JSON.stringify(inscricoesFiltrados))
}


module.exports = {
    getTodosInscricoes, getInscricaoPorId, insereInscricao, modificaInscricao, deletarInscricaoPorId
}