const Sequelize = require('sequelize');
const bancoDeDados = require('./../bancoDeDados/conexao');

const Pessoa = bancoDeDados.define('pessoa', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING
    }
});

module.exports = Pessoa;
