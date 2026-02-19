const { Router } = require("express");
const { getAlunos, getAluno, postAluno, patchAluno, deleteAluno} = require("../controladores/alunos")
const router = Router()

router.get('/', getAlunos)

router.get('/:matricula', getAluno)

router.post('/', postAluno)

router.patch('/:matricula', patchAluno)

router.delete('/:matricula', deleteAluno)

module.exports = router
