 // Prints the contents of the file
const fs = require("fs");
const path = require("path");

const livroNovo = {
    "id": "3",
    "nome": "Livro 3"
  };
  const filePath = path.join(__dirname, "livros.json");
  const data = fs.readFileSync(filePath, "utf8");
  
  let books = JSON.parse(data); // Converte os dados lidos para um objeto JavaScript
  books.push(livroNovo); // Adiciona o novo livro ao array
  
  fs.writeFileSync(filePath, JSON.stringify(books)); // Grava os dados atualizados no arquivo
  
  console.log("Livro adicionado com sucesso!", data);

  