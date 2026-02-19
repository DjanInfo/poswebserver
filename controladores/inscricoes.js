const { getTodosInscricoes, getInscricaoPorId, insereInscricao, modificaInscricao, deletarInscricaoPorId } = require("../servicos/inscricoes")

function getInscricoes(req, res) {
    try {
        const inscricoes = getTodosInscricoes()
        res.send(inscricoes)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getInscricao(req, res) {
    try {
        const id = req.params.id
        const inscricoes = getInscricaoPorId(id)
        res.send(inscricoes)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postInscricao(req, res){
   try {
        const inscricaoNovo = req.body
        insereInscricao(inscricaoNovo)
        res.status(201)
        res.send("Inscricao inserido com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchInscricao(req, res){
   try {
        const id = req.params.id
        const body = req.body
        modificaInscricao(body,id)
        res.send("Item inserido com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }    
}

function deleteInscricao(req, res) {
    try {
        const id = req.params.id
        deletarInscricaoPorId(id)
        res.send("Inscricao deletado com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getInscricoes, getInscricao, postInscricao, patchInscricao, deleteInscricao
}