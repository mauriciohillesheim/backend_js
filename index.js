const express = require('express');
const app = express();

// Rota GET para "/"
app.get('/:id', (req, res) => {
    const id = req.params.id
    const num1 = req.query.num1
    //res.send('Hello World');
    //console.log('hello world')
    res.json({ message: "Até funcionar Funciona!" })
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
