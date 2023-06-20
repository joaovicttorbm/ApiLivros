const { obterListaLivros, obterLivroPorId, inserirLivro, atulizarLivro, delLivro} = require("../servico/livros")

function obterLivros(req, res) {
    try {
        const livros = obterListaLivros();
        res.status(200).json(livros);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

function obterLivro(req, res) {
    try {
        const id = req.params.id;
        const livro = obterLivroPorId(id);

        if (id && Number(id) && livro.length > 0){
            res.send(livro);
        }else {
            res.status(422).send('ID invalido !!')
        }
        
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function adicionarLivro(req, res) {
    try {
        const novoLivro = req.body;
        const id = req.body.id;
        const nome = req.body.nome;
        if ( id && nome ){
            
            if (obterLivroPorId(id).length = 0){
                inserirLivro(novoLivro),
                res.status(201)
                res.send( 'Novo livro !!');
            }else{
                res.status(409).send('Já existe um livro com esse ID!');
            }

        }else {
            res.status(422).send(" Deve ser passado 'id' e 'nome' " )
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id
        const body = req.body

        if (id && Number(id)){
            atulizarLivro(body, id)
            res.status(200)
            res.send('Livro atualizado !!')
        }else {
            res.status(422).send('ID invalido !!')
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id;
        const livro = obterLivroPorId(id).length > 0 ? true : false; 

        if (id && Number(id) && livro){
            delLivro(id)
            res.status(200)
            res.send('Livro deletado!!')
        }else {
            res.status(422).send('ID invalido !!')
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}





module.exports = {
    obterLivros,
    obterLivro,
    adicionarLivro,
    patchLivro,
    deleteLivro
};