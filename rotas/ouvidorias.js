const { Router } = require("express");
const { getOuvidorias, getOuvidoria, postOuvidoria, patchOuvidoria, deleteOuvidoria} = require("../controladores/ouvidorias")
const router = Router()

router.get('/', getOuvidorias)

router.get('/:id', getOuvidoria)

router.post('/', postOuvidoria)

router.patch('/:id', patchOuvidoria)

router.delete('/:id', deleteOuvidoria)

module.exports = router
