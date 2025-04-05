const express = require('express')
const Cadastrousuario = require('./../models/Cadastrousuario')
const { where } = require('sequelize')

const router = express.Router()


router.get('/:id', (requisicao, resposta) => {
    let {id} = requisicao.params
    let objSalvar = requisicao.body

    Cadastrousuario.findAll({

        where: { id: id }
   
    })
        .then((dados) => {
            resposta.send(dados)
        })
        .catch((erro) => {
            console.log(erro)
            resposta.send('Error')
        })


})

// inserir os dados
router.post('/', (requisicao, resposta) => {
    let objSalvar = requisicao.body
    
    Cadastrousuario.create(objSalvar)
        .then(() => {
            resposta.send('Cadastrou o Usuário')
        })
        .catch((erro) => {
            console.log(erro)
            resposta.send('Error')
        })
})

router.put('/:id', (requisicao, resposta) => {
    let {id} = requisicao.params
    let objSalvar = requisicao.body
    Cadastrousuario.update(objSalvar, {
        where: { id: id }
    })
    .then(() => {
        resposta.send(`Realizada atualização!`)
    })
    .catch((erro) => {
        console.log(erro)
        resposta.send('Error')
    })
})

router.delete('/:id', (requisicao, resposta) => {
    let {id} = requisicao.params
    let objSalvar = requisicao.body
    Cadastrousuario.destroy({
        where: {id: id}
    })
        .then(() => {
            resposta.send('Deletado!!')
        })
        .catch((erro) => {
            console.log(erro)
            resposta.send('Error')
        })
})

module.exports = router