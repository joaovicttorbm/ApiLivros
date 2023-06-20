const fs = require("fs");
const path = require("path");

function lerArquivo() {
    try {
        const filePath = path.join(__dirname, "../", "livros.json");
        const conteudoArquivo = fs.readFileSync(filePath, "utf8");

        if (conteudoArquivo) {
            return JSON.parse(conteudoArquivo) || [];
        }

        return [];

    } catch (error) {
        throw new Error('Erro na leitura do arquivo');
    }
}

function escreverArquivo(livros) {
    const filePath = path.join(__dirname, "../", "livros.json");
    fs.writeFileSync(filePath, JSON.stringify(livros));
}

function obterListaLivros() {
    return lerArquivo();
}

function obterLivroPorId(id) {
    const livros = lerArquivo();
    const livroFiltrado = livros.find(livro => livro.id === id) || [];

    return livroFiltrado;
}

function inserirLivro(livroNovo) {
    const livros = lerArquivo();
    const livrosAtualizados = [...livros, livroNovo];
    escreverArquivo(livrosAtualizados)
}

function atulizarLivro(modificacao, id) {
    let livros = lerArquivo();
    const indice = livros.findIndex(livro => livro.id === id);
    const livrosAtualizado = {...livros[indice], ...modificacao};
    livros[indice] = livrosAtualizado;
    escreverArquivo(livros)
    console.log(livros,indice)
}

function delLivro(id) {
    let livros = lerArquivo();
    const livrosAtualizado = livros.filter(livro => livro.id !== id);
    escreverArquivo(livrosAtualizado)
}

module.exports = {
    obterListaLivros,
    obterLivroPorId,
    inserirLivro,
    atulizarLivro,
    delLivro
};