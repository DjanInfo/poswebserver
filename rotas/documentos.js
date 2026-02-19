const { Router } = require("express");
const { getDocumentos, getDocumento, postDocumento, patchDocumento, deleteDocumento} = require("../controladores/documentos")
const router = Router()

router.get('/', getDocumentos)

router.get('/:id', getDocumento)

router.post('/', postDocumento)

router.patch('/:id', patchDocumento)

router.delete('/:id', deleteDocumento)

module.exports = router
