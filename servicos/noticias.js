const fs = require("fs")

function getTodosNoticias(){
    return JSON.parse(fs.readFileSync("noticias.json"))
}

function getNoticiaPorId(id) {
    const noticias = JSON.parse(fs.readFileSync("noticias.json"))
    const noticiaFiltrado = noticias.filter( noticia => noticia.id === id )[0]

return noticiaFiltrado
}

function insereNoticia(noticiaNovo){
    const noticias = JSON.parse(fs.readFileSync("noticias.json"))
    const novaListaDeNoticias = [ ...noticias, noticiaNovo ]
    fs.writeFileSync("noticias.json",JSON.stringify(novaListaDeNoticias))
}

function modificaNoticia(modificacoes, id){
    let noticiasAtuais = JSON.parse(fs.readFileSync("noticias.json"))
    const indiceModificado = noticiasAtuais.findIndex(noticia =>noticia.id === id)
    const conteudoMudado = {...noticiasAtuais[indiceModificado], ...modificacoes }
    noticiasAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync("noticias.json", JSON.stringify(noticiasAtuais))
}

function deletarNoticiaPorId(id) {
    const noticias = JSON.parse(fs.readFileSync("noticias.json"))
    const noticiasFiltrados = noticias.filter( noticia => noticia.id!== id )
    fs.writeFileSync("noticias.json", JSON.stringify(noticiasFiltrados))
}


module.exports = {
    getTodosNoticias, getNoticiaPorId, insereNoticia, modificaNoticia, deletarNoticiaPorId
}