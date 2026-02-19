const { Router } = require("express");
const { getNoticias, getNoticia, postNoticia, patchNoticia, deleteNoticia} = require("../controladores/noticias")
const router = Router()

router.get('/', getNoticias)

router.get('/:id', getNoticia)

router.post('/', postNoticia)

router.patch('/:id', patchNoticia)

router.delete('/:id', deleteNoticia)

module.exports = router
