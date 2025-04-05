let express = require('express')
const db = require('./db/conexao.js')
const bodyParser = require('body-parser')

let app = express();

const PORT = 3001;

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

db.authenticate()
    .then(() => {
        console.log('Conectou ao Banco de Dados')
    })
    .catch((erro) => {
        console.log('Erro ao conectar no banco')
        console.log(erro)
    })


app.use('/categorias', require('./routes/categorias'))
app.use('/cadastrousuario', require('./routes/cadastrousuarios'))

app.listen(PORT, () => {
    console.log('Servidor executando na porta ' + PORT)
})
