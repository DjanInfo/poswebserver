const fs = require("fs")

function getTodosDocumentos(){
    return JSON.parse(fs.readFileSync("documentos.json"))
}

function getDocumentoPorId(id) {
    const documentos = JSON.parse(fs.readFileSync("documentos.json"))
    const documentoFiltrado = documentos.filter( documento => documento.id === id )[0]

return documentoFiltrado
}

function insereDocumento(documentoNovo){
    const documentos = JSON.parse(fs.readFileSync("documentos.json"))
    const novaListaDeDocumentos = [ ...documentos, documentoNovo ]
    fs.writeFileSync("documentos.json",JSON.stringify(novaListaDeDocumentos))
}

function modificaDocumento(modificacoes, id){
    let documentosAtuais = JSON.parse(fs.readFileSync("documentos.json"))
    const indiceModificado = documentosAtuais.findIndex(documento =>documento.id === id)
    const conteudoMudado = {...documentosAtuais[indiceModificado], ...modificacoes }
    documentosAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync("documentos.json", JSON.stringify(documentosAtuais))
}

function deletarDocumentoPorId(id) {
    const documentos = JSON.parse(fs.readFileSync("documentos.json"))
    const documentosFiltrados = documentos.filter( documento => documento.id!== id )
    fs.writeFileSync("documentos.json", JSON.stringify(documentosFiltrados))
}


module.exports = {
    getTodosDocumentos, getDocumentoPorId, insereDocumento, modificaDocumento, deletarDocumentoPorId
}