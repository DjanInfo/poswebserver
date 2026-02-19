const express = require("express");
const cors = require("cors")
const rotaAlunos = require("./rotas/alunos")
const rotaDocentes = require("./rotas/docentes")
const rotaNoticias = require("./rotas/noticias")
const rotaEditais = require("./rotas/editais")
const rotaArtigos = require("./rotas/artigos")
const rotaDisciplinas = require("./rotas/disciplinas")
const rotaInscricoes = require("./rotas/inscricoes")
const rotaOuvidorias = require("./rotas/ouvidorias")
const rotaUsuarios = require("./rotas/usuarios")
const rotaDocumentos = require("./rotas/documentos")
const app = express();

app.use(express.json())
app.use(cors({origin: "*"}))
app.use('/alunos', rotaAlunos)
app.use('/docentes', rotaDocentes)
app.use('/noticias', rotaNoticias)
app.use('/editais', rotaEditais)
app.use('/artigos', rotaArtigos)
app.use('/disciplinas', rotaDisciplinas)
app.use('/inscricoes', rotaInscricoes)
app.use('/ouvidorias', rotaOuvidorias)
app.use('/usuarios', rotaUsuarios)
app.use('/documentos', rotaDocumentos)
const port = 8000;


app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
})