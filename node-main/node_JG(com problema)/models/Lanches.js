const Sequelize = require('sequelize')
const db = require('./../bancoDeDados/conexao')

const Lanches = db.define('lanche', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    
    nome: {
        type: Sequelize.STRING
    }
    

});

module.exports = Lanches