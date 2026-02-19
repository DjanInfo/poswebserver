const { getTodosDisciplinas, getDisciplinaPorId, insereDisciplina, modificaDisciplina, deletarDisciplinaPorId } = require("../servicos/disciplinas")

function getDisciplinas(req, res) {
    try {
        const disciplinas = getTodosDisciplinas()
        res.send(disciplinas)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getDisciplina(req, res) {
    try {
        const id = req.params.id
        const disciplinas = getDisciplinaPorId(id)
        res.send(disciplinas)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postDisciplina(req, res){
   try {
        const disciplinaNovo = req.body
        insereDisciplina(disciplinaNovo)
        res.status(201)
        res.send("Disciplina inserido com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchDisciplina(req, res){
   try {
        const id = req.params.id
        const body = req.body
        modificaDisciplina(body,id)
        res.send("Item inserido com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }    
}

function deleteDisciplina(req, res) {
    try {
        const id = req.params.id
        deletarDisciplinaPorId(id)
        res.send("Disciplina deletado com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getDisciplinas, getDisciplina, postDisciplina, patchDisciplina, deleteDisciplina
}