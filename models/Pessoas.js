const Sequelize = require('sequelize')
const db = require('./../bancoDeDados/conexao')

const Pessoas = db.define('pessoas', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    telefone: {
        type: Sequelize.STRING,
    },
    endereco: {
        type: Sequelize.STRING,
    },

})
module.exports = Pessoas