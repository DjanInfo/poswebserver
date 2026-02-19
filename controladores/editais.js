const { getTodosEditais, getEditalPorId, insereEdital, modificaEdital, deletarEditalPorId } = require("../servicos/editais")

function getEditais(req, res) {
    try {
        const editais = getTodosEditais()
        res.send(editais)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getEdital(req, res) {
    try {
        const id = req.params.id
        const editais = getEditalPorId(id)
        res.send(editais)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postEdital(req, res){
   try {
        const editalNovo = req.body
        insereEdital(editalNovo)
        res.status(201)
        res.send("Edital inserido com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchEdital(req, res){
   try {
        const id = req.params.id
        const body = req.body
        modificaEdital(body,id)
        res.send("Item inserido com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }    
}

function deleteEdital(req, res) {
    try {
        const id = req.params.id
        deletarEditalPorId(id)
        res.send("Edital deletado com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getEditais, getEdital, postEdital, patchEdital, deleteEdital
}