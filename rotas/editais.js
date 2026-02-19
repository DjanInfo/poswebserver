const { Router } = require("express");
const { getEditais, getEdital, postEdital, patchEdital, deleteEdital} = require("../controladores/editais")
const router = Router()

router.get('/', getEditais)

router.get('/:id', getEdital)

router.post('/', postEdital)

router.patch('/:id', patchEdital)

router.delete('/:id', deleteEdital)

module.exports = router
