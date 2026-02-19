const { getTodosDocentes, getDocentePorId, insereDocente, modificaDocente, deletarDocentePorId } = require("../servicos/docentes")

function getDocentes(req, res) {
    try {
        const docentes = getTodosDocentes()
        res.send(docentes)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getDocente(req, res) {
    try {
        const id = req.params.id
        const docentes = getDocentePorId(id)
        res.send(docentes)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postDocente(req, res){
   try {
        const docenteNovo = req.body
        insereDocente(docenteNovo)
        res.status(201)
        res.send("Docente inserido com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchDocente(req, res){
   try {
        const id = req.params.id
        const body = req.body
        modificaDocente(body,id)
        res.send("Item inserido com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }    
}

function deleteDocente(req, res) {
    try {
        const id = req.params.id
        deletarDocentePorId(id)
        res.send("Docente deletado com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getDocentes, getDocente, postDocente, patchDocente, deleteDocente
}