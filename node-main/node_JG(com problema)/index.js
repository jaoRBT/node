const express = require('express')
const db = require('./bancoDeDados/conexao')
const Sequelize = require('sequelize')
const bodyParser = require('body-parser')

db.authenticate()
    .then(() => {
        console.log('Conectou ao Banco de Dados')
    })
    .catch((erro) => {
        console.log(
            'Erro ao conectar' +
            'no Banco de Dados' + erro
        )
    })

const PORT = 3001

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));


app.use('/jobs', require('./routes/jobs'))

app.use('/lanches', require('./routes/lanches'))

app.listen(PORT, () => {
    console.log(
        'Express esta rodando na porta: ' +
        PORT
    )
})