const express = require('express')
const Lanches = require('./../models/Lanches')

const router = express.Router()
//get: buscar dados
router.get('/listar', (req, res) => {
    Lanches.findAll()
        .then((result) => {
            console.log(result)
            res.send(result)
        })
        .catch((error) => {
            console.log(erro)

        })

})
//post: criar dados
router.post('/criar', (req, res) => {
    let novoLanche = {
        nome: 'x-bacon',
    };
    Lanches.create(novoLanche)
        .then((res) => {
            res.send('Novo lanche criado!')
        })
        .catch((error) => {
            console.log(erro)

        })
})


//put:  atualizar dados
router.put('/atualizar', (req, res) => {
    Lanches.update({ nome: 'X-tudo' }, {
        where: {
            id: 2
        }
    })
        .then((result) => {
            res.send('Atualizado')
        })
        .catch((error) => {
            console.log(erro)

        })

})
//delete: deletar dados
router.delete('/excluir', (req, res) => {
    Lanches.destroy({
        where: {
            id: 3
        }
    })
        .then((result) => {
            res.send('excluido com sucesso')
        })
        .catch((error) => {
            console.log(erro)
        })



})


module.exports = Lanches