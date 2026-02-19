const fs = require("fs")

function getTodosUsuarios(){
    return JSON.parse(fs.readFileSync("usuarios.json"))
}

function getUsuarioPorId(id) {
    const usuarios = JSON.parse(fs.readFileSync("usuarios.json"))
    const usuarioFiltrado = usuarios.filter( usuario => usuario.id === id )[0]

return usuarioFiltrado
}

function insereUsuario(usuarioNovo){
    const usuarios = JSON.parse(fs.readFileSync("usuarios.json"))
    const novaListaDeUsuarios = [ ...usuarios, usuarioNovo ]
    fs.writeFileSync("usuarios.json",JSON.stringify(novaListaDeUsuarios))
}

function modificaUsuario(modificacoes, id){
    let usuariosAtuais = JSON.parse(fs.readFileSync("usuarios.json"))
    const indiceModificado = usuariosAtuais.findIndex(usuario =>usuario.id === id)
    const conteudoMudado = {...usuariosAtuais[indiceModificado], ...modificacoes }
    usuariosAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync("usuarios.json", JSON.stringify(usuariosAtuais))
}

function deletarUsuarioPorId(id) {
    const usuarios = JSON.parse(fs.readFileSync("usuarios.json"))
    const usuariosFiltrados = usuarios.filter( usuario => usuario.id!== id )
    fs.writeFileSync("usuarios.json", JSON.stringify(usuariosFiltrados))
}


module.exports = {
    getTodosUsuarios, getUsuarioPorId, insereUsuario, modificaUsuario, deletarUsuarioPorId
}