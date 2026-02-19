const { Router } = require("express");
const { getDisciplinas, getDisciplina, postDisciplina, patchDisciplina, deleteDisciplina} = require("../controladores/disciplinas")
const router = Router()

router.get('/', getDisciplinas)

router.get('/:id', getDisciplina)

router.post('/', postDisciplina)

router.patch('/:id', patchDisciplina)

router.delete('/:id', deleteDisciplina)

module.exports = router
