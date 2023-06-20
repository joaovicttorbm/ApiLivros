const {Router} = require("express");

const { obterLivros, obterLivro, adicionarLivro, patchLivro, deleteLivro} = require('../controladores/livros.js');

const router = Router();

router.get('/', obterLivros);

router.get('/:id', obterLivro);

router.post('/', adicionarLivro);

router.patch('/:id', patchLivro);

router.delete('/:id', deleteLivro);

module.exports = router