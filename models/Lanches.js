const Sequelize = require('sequelize')
const bancoDeDados = require('./../bancoDeDados/conexao')

const Lanches = bancoDeDados.define('lanche', {
    id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true   
    },
    nome: {
        type: Sequelize.STRING
    }
})

module.exports = Lanches