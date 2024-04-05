const express = require('express');
const pessoa = require('./../models/Cadastros');
const router = express.Router();

router.get('/', (req, res) => {
    Pessoa.findAll()
        .then((pessoas) => {
            res.send(pessoas);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send('Erro');
        });
});

router.post('/', (req, res) => {
    let novaPessoa = req.body;
    Pessoa.create(novaPessoa)
        .then(() => {
            res.send('Nova pessoa criada!');
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send('Erro ao criar pessoa');
        });
});

router.put('/:id', (req, res) => {
    let id = req.params.id;
    let dadosAtualizados = req.body;
    Pessoa.update(dadosAtualizados, {
        where: {
            id: id
        }
    })
        .then(() => {
            res.send('Pessoa atualizada!');
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send('Erro ao atualizar pessoa');
        });
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    Pessoa.destroy({
        where: {
            id: id
        }
    })
        .then(() => {
            res.send('Pessoa excluída!');
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send('Erro ao excluir pessoa');
        });
});

module.exports = router;
