const express = require('express')
const Jobs = require('./../models/Jobs')
const Lanches = require('./../models/Lanches')
const { where } = require('sequelize')
const { CONNREFUSED } = require('dns')

const router = express.Router()

router.get('/', (requisicao, resposta) => {
    
    let novoTrabalho = {
        titulo: 'Atendente',
        salario: '4000',
        empresa: 'Ariosi Lanches',
        descricao: 'Melhor lanchonete da metropoli Xambre',
        email: 'ariosilanches@ariosi.com',
         novo_trabalho: '0'
    }

// Jobs.create(novoTrabalho)
//       .then(() => {
//          resposta.send('Nova vaga criada!')
//    })
//      .catch((erro) => {
//          console.log(erro)
//          resposta.send('Deu Erro')
//      })






//acha apenas um ou todos
//   Jobs.findAll({
//     where: {
//         id: 1
//     }
//      })
//     .then((res) => {
//         console.log(res)
//         resposta.send(res)
//     })
//     .catch((erro) => {
//         console.log(erro)
//         resposta.send('Deu erro')
//     })

//atualizando
// Jobs.update({titulo: 'Scrum Manster'} , {
//     where: {
//         id: 1
//     }
// })
//         .then((res) => {
//             resposta.send('Atualizado')
//          })
//          .catch((erro) => {
//              console.log(erro)
//              resposta.send('Deu erro')
//         })

//deleta
// Jobs.destroy({
//     where: {
//         id: 1
//     }
// })
//         .then((res) => {
//              resposta.send('deletado com sucesso')
//          })
//          .catch((erro) => {
//              console.log(erro)
//              resposta.send('Deu erro')
//          })


})

// CRUD
// CREATE
// READ
// UPDATE
// DELETE

router.post('/teste', (requisicao, resposta) => {
    resposta.send('Teste Nodemon REQ')
})
// http://localhost:3001/teste

router.get('/lanches',(req, res) => {
    let objSalvar = {
        nome: 'X-bacon'
    }

    Lanches.create(objSalvar)
        .then(() => {
            res.send('Criando novo Lanche')
        })
        .catch((erro) =>{
            console.log('erro')
            console.log(erro)
            res.send('Deu ERRO  ;(')
        })
})

module.exports = router