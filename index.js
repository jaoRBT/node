const express = require('express')
const db = require('./bancoDeDados/conexao')
const Sequelize = require('sequelize')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const path = require('path')


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
app.set('views', path.join(__dirname,'views'))
app.engine('handlebars', exphbs.engine ({defaultlayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index')
})



app.listen(PORT, () => {
    console.log(
        'Express esta rodando na porta: ' +
        PORT
    )
})