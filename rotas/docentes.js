const { Router } = require("express");
const { getDocentes, getDocente, postDocente, patchDocente, deleteDocente} = require("../controladores/docentes")
const router = Router()

router.get('/', getDocentes)

router.get('/:id', getDocente)

router.post('/', postDocente)

router.patch('/:id', patchDocente)

router.delete('/:id', deleteDocente)

module.exports = router
