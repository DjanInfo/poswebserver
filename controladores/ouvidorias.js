const { getTodosOuvidorias, getOuvidoriaPorId, insereOuvidoria, modificaOuvidoria, deletarOuvidoriaPorId } = require("../servicos/ouvidorias")

function getOuvidorias(req, res) {
    try {
        const ouvidorias = getTodosOuvidorias()
        res.send(ouvidorias)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getOuvidoria(req, res) {
    try {
        const id = req.params.id
        const ouvidorias = getOuvidoriaPorId(id)
        res.send(ouvidorias)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postOuvidoria(req, res){
   try {
        const ouvidoriaNovo = req.body
        insereOuvidoria(ouvidoriaNovo)
        res.status(201)
        res.send("Ouvidoria inserido com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchOuvidoria(req, res){
   try {
        const id = req.params.id
        const body = req.body
        modificaOuvidoria(body,id)
        res.send("Item inserido com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }    
}

function deleteOuvidoria(req, res) {
    try {
        const id = req.params.id
        deletarOuvidoriaPorId(id)
        res.send("Ouvidoria deletado com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getOuvidorias, getOuvidoria, postOuvidoria, patchOuvidoria, deleteOuvidoria
}