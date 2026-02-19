const { getTodosArtigos, getArtigoPorId, insereArtigo, modificaArtigo, deletarArtigoPorId } = require("../servicos/artigos")

function getArtigos(req, res) {
    try {
        const artigos = getTodosArtigos()
        res.send(artigos)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getArtigo(req, res) {
    try {
        const id = req.params.id
        const artigos = getArtigoPorId(id)
        res.send(artigos)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postArtigo(req, res){
   try {
        const artigoNovo = req.body
        insereArtigo(artigoNovo)
        res.status(201)
        res.send("Artigo inserido com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchArtigo(req, res){
   try {
        const id = req.params.id
        const body = req.body
        modificaArtigo(body,id)
        res.send("Item inserido com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }    
}

function deleteArtigo(req, res) {
    try {
        const id = req.params.id
        deletarArtigoPorId(id)
        res.send("Artigo deletado com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getArtigos, getArtigo, postArtigo, patchArtigo, deleteArtigo
}