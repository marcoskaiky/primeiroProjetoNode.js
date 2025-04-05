const Sequelize = require('sequelize')
const db = require('./../db/conexao')

const Cadastrousuario = db.define('cadastrousuario', {
    nome: {
        type: Sequelize.STRING
    },

    email: {
        type: Sequelize.STRING
    }

    ,

    telefone: {
        type: Sequelize.NUMBER
    }

    ,

    endereco: {
        type: Sequelize.STRING
    }


})

module.exports = Cadastrousuario