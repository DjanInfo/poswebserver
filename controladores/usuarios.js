const { getTodosUsuarios, getUsuarioPorId, insereUsuario, modificaUsuario, deletarUsuarioPorId } = require("../servicos/usuarios")

function getUsuarios(req, res) {
    try {
        const usuarios = getTodosUsuarios()
        res.send(usuarios)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getUsuario(req, res) {
    try {
        const id = req.params.id
        const usuarios = getUsuarioPorId(id)
        res.send(usuarios)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postUsuario(req, res){
   try {
        const usuarioNovo = req.body
        insereUsuario(usuarioNovo)
        res.status(201)
        res.send("Usuario inserido com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchUsuario(req, res){
   try {
        const id = req.params.id
        const body = req.body
        modificaUsuario(body,id)
        res.send("Item inserido com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }    
}

function deleteUsuario(req, res) {
    try {
        const id = req.params.id
        deletarUsuarioPorId(id)
        res.send("Usuario deletado com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getUsuarios, getUsuario, postUsuario, patchUsuario, deleteUsuario
}