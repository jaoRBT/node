const express = require('express');
const bancoDeDados = require('./bancoDeDados/conexao');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');



bancoDeDados.authenticate()
    .then(() => {
        console.log("Conectou ao Banco de Dados");
    })
    .catch((error) => {
        console.log("Erro ao connectar no Banco de Dados" + error);
    });

const PORT = 3001;

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=> {

    res.render('index', {
        
    });
});


app.use('/jobs', require('./routes/jobs'));

app.use('/lanches', require('./routes/Lanches'));

app.use('/cadastros', require('./routes/cadastros.js'));
    
app.listen(PORT, () => {
    console.log(`Listen port: ${PORT}`);
});