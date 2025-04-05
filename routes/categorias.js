const express = require('express')
const Categoria = require('./../models/Categoria')

const router = express.Router()

// http://localhost:3001/categorias
router.get('/', (requisicao, resposta) => {
    Categoria.findAll({
        // where: {
        //     id: 4
        // }
    })
        .then((dados) => {
            resposta.send(dados)
        })
        .catch((erro) => {
            console.log(erro)
            resposta.send('Lasco')
        })
})

// inserir os dados
router.post('/', (requisicao, resposta) => {
    let objSalvar = requisicao.body
    
    Categoria.create(objSalvar)
        .then(() => {
            resposta.send('Cadastro a categoria')
        })
        .catch((erro) => {
            console.log(erro)
            resposta.send('Deu Erro :/')
        })
})

router.put('/', (requisicao, resposta) => {
    let objSalvar = {
        nome: 'Yuri'
    }

    Categoria.update(objSalvar, {
        where: { id: 1 }
    })
        .then(() => {
            resposta.send('Atualizado com sucesso.')
        })
        .catch((erro) => {
            console.log(erro)
            resposta.send('Deu erro :/')
        })
})

router.delete('/', (request, response) => {

    Categoria.destroy({
        where: {
            id: 2
        }
    })
        .then(() => {
            response.send('Deletado com Sucesso')
        })
        .catch((erro) => {
            console.log(erro)
            response.send('Erro ao excluir.')
        })
})

module.exports = router