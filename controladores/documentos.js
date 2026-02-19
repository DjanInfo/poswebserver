const { getTodosDocumentos, getDocumentoPorId, insereDocumento, modificaDocumento, deletarDocumentoPorId } = require("../servicos/documentos")

function getDocumentos(req, res) {
    try {
        const documentos = getTodosDocumentos()
        res.send(documentos)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getDocumento(req, res) {
    try {
        const id = req.params.id
        const documentos = getDocumentoPorId(id)
        res.send(documentos)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postDocumento(req, res){
   try {
        const documentoNovo = req.body
        insereDocumento(documentoNovo)
        res.status(201)
        res.send("Documento inserido com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchDocumento(req, res){
   try {
        const id = req.params.id
        const body = req.body
        modificaDocumento(body,id)
        res.send("Item inserido com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }    
}

function deleteDocumento(req, res) {
    try {
        const id = req.params.id
        deletarDocumentoPorId(id)
        res.send("Documento deletado com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getDocumentos, getDocumento, postDocumento, patchDocumento, deleteDocumento
}