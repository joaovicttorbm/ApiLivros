const express = require('express');
const rotaLivros = require("./src/rotas/livros.js");
const app = express();
const port = 8000;

app.use(express.json());
app.use('/livros', rotaLivros);

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})


