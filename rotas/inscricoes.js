const { Router } = require("express");
const { getInscricoes, getInscricao, postInscricao, patchInscricao, deleteInscricao} = require("../controladores/inscricoes")
const router = Router()

router.get('/', getInscricoes)

router.get('/:id', getInscricao)

router.post('/', postInscricao)

router.patch('/:id', patchInscricao)

router.delete('/:id', deleteInscricao)

module.exports = router
