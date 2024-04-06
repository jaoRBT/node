const express = require('express');
const pessoa = require('./../models/Cadastros');
const router = express.Router();

router.get('/', (req, res) => {
    pessoa.findAll()
        .then((pessoas) => {
            res.send(pessoas);
        })
        .catch((error) => {
            console.log(error);
           
        });
});

router.post('/', (req, res) => {
    let novaPessoa = req.body;
    pessoa.create(novaPessoa)
        .then(() => {
            res.send('Nova pessoa criada!');
        })
        .catch((error) => {
            console.log(error);
           
        });
});


router.put('/', (req, res) => {
    pessoa.update({ nome: 'eduardo' }, {
        where: {
            id: 2
        }
    })
        .then((result) => {
            res.send('Atualizado com sucesso');
        }) 
        .catch((error) => {
            console.log(error);
            res.status(500).send('Erro ao atualizar pessoa');
        });
});


router.delete('/:id', (req, res) => {
    pessoa.destroy({
        where: {
            id: 6
        }
    })
        .then(() => {
            res.send('Pessoa excluída!');
        })
        .catch((error) => {
            console.log(error);
            
        });
});

module.exports = router;
