const { Router } = require("express");
const { getUsuarios, getUsuario, postUsuario, patchUsuario, deleteUsuario} = require("../controladores/usuarios")
const router = Router()

router.get('/', getUsuarios)

router.get('/:id', getUsuario)

router.post('/', postUsuario)

router.patch('/:id', patchUsuario)

router.delete('/:id', deleteUsuario)

module.exports = router
