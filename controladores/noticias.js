const { getTodosNoticias, getNoticiaPorId, insereNoticia, modificaNoticia, deletarNoticiaPorId } = require("../servicos/noticias")

function getNoticias(req, res) {
    try {
        const noticias = getTodosNoticias()
        res.send(noticias)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getNoticia(req, res) {
    try {
        const id = req.params.id
        const noticias = getNoticiaPorId(id)
        res.send(noticias)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postNoticia(req, res){
   try {
        const noticiaNovo = req.body
        insereNoticia(noticiaNovo)
        res.status(201)
        res.send("Noticia inserido com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchNoticia(req, res){
   try {
        const id = req.params.id
        const body = req.body
        modificaNoticia(body,id)
        res.send("Item inserido com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }    
}

function deleteNoticia(req, res) {
    try {
        const id = req.params.id
        deletarNoticiaPorId(id)
        res.send("Noticia deletado com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getNoticias, getNoticia, postNoticia, patchNoticia, deleteNoticia
}