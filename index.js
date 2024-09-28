const express = require('express');
const {
    somar,
    calculaSalario,
    verificaTriangulos2,
    calcularMediaPesos,
    converterCelsiusParaFahrenheit,
    converterMilhasParaKm,
    converterSegundosParaTempo,
    converterKmParaM,
    calcularTabuada,
    calcularMediaNotas,
    calcularIMC,
    calcularOperacao,
    verificarPositivoNegativo,
    verificarParImpar,
    verificarMaiorNumero,
    calcularImpostoRenda,
    calcularMediaPonderada,
    calcularCustoCarro,
    calcularJuros,
    calcularValorTotal,
    investigarCrime,
    verificarMulta,
    repetirBatata,
    tabuada,
    calcularMediaAlturaPessoas,
    calcularMediaPesoPessoas,
    verificarPesoElevador,
    contarNegativos,
    preencherArrayComAleatorios,
    preencherVetorIntervalado
} = require('./service/exercicios');

const app = express();

app.use(express.json());

app.get("/exercicio1/", (req, res) => {
    // http://localhost:3000/exercicio1/?num1=0&num2=3
    const resultado = somar(req.query.num1, req.query.num2);

    res.json({ resultadoGet: resultado })
})

app.post("/exercicio1/", (req, res) => {
    // http://localhost:3000/exercicio1
    const resultado = somar(req.body.num1, req.body.num2);

    // informar um status diferente de 200 (pesquisar sobre 😊)
    res.status(201).json({ resultadoPost: resultado })
})

app.get("/exercicio2/", (req, res) => {
    // http://localhost:3000/exercicio2/?valorHora=0&horasTrabalhadas=3
    const salario = calculaSalario(
        Number(req.query.valorHora),
        Number(req.query.horasTrabalhadas)
    );
    res.json({ resultado: salario })
})

// Exercicio 3: Média dos pesos
app.get("/exercicio3/", (req, res) => {
    const pesos = req.query.pesos.map(Number);
    const resultado = calcularMediaPesos(pesos);
    res.json({ media: resultado });
});

app.post("/exercicio3/", (req, res) => {
    const { pesos } = req.body;
    const resultado = calcularMediaPesos(pesos);
    res.status(201).json({ media: resultado });
});

// Exercicio 4: Conversão Celsius para Fahrenheit
app.get("/exercicio4/", (req, res) => {
    const celsius = Number(req.query.celsius);
    const resultado = converterCelsiusParaFahrenheit(celsius);
    res.json({ fahrenheit: resultado });
});

app.post("/exercicio4/", (req, res) => {
    const { celsius } = req.body;
    const resultado = converterCelsiusParaFahrenheit(celsius);
    res.status(201).json({ fahrenheit: resultado });
});

// Exercicio 5: Conversão Milhas para Km
app.get("/exercicio5/", (req, res) => {
    const milhas = Number(req.query.milhas);
    const resultado = converterMilhasParaKm(milhas);
    res.json({ quilometros: resultado });
});

app.post("/exercicio5/", (req, res) => {
    const { milhas } = req.body;
    const resultado = converterMilhasParaKm(milhas);
    res.status(201).json({ quilometros: resultado });
});

// Exercicio 6: Conversão de Segundos para Horas, Minutos e Segundos
app.get("/exercicio6/", (req, res) => {
    const segundos = Number(req.query.segundos);
    const resultado = converterSegundosParaTempo(segundos);
    res.json({ tempo: resultado });
});

app.post("/exercicio6/", (req, res) => {
    const { segundos } = req.body;
    const resultado = converterSegundosParaTempo(segundos);
    res.status(201).json({ tempo: resultado });
});

// Exercicio 7: Conversão de Km para Metros e Centímetros
app.get("/exercicio7/", (req, res) => {
    const km = Number(req.query.km);
    const resultado = converterKmParaM(km);
    res.json({ metros: resultado.metros, centimetros: resultado.centimetros });
});

app.post("/exercicio7/", (req, res) => {
    const { km } = req.body;
    const resultado = converterKmParaM(km);
    res.status(201).json({ metros: resultado.metros, centimetros: resultado.centimetros });
});

// Exercicio 8: Tabuada
app.get("/exercicio8/", (req, res) => {
    const num = Number(req.query.num);
    const resultado = calcularTabuada(num);
    res.json({ tabuada: resultado });
});

app.post("/exercicio8/", (req, res) => {
    const { num } = req.body;
    const resultado = calcularTabuada(num);
    res.status(201).json({ tabuada: resultado });
});

// Exercicio 9: Média aritmética de três notas e status
app.get("/exercicio9/", (req, res) => {
    const { n1, n2, n3 } = req.query;
    const resultado = calcularMediaNotas(Number(n1), Number(n2), Number(n3));
    res.json(resultado);
});

app.post("/exercicio9/", (req, res) => {
    const { n1, n2, n3 } = req.body;
    const resultado = calcularMediaNotas(n1, n2, n3);
    res.status(201).json(resultado);
});

// Exercicio 10: Cálculo do IMC
app.get("/exercicio10/", (req, res) => {
    const { sexo, altura } = req.query;
    const resultado = calcularIMC(sexo, Number(altura));
    res.json({ imc: resultado });
});

app.post("/exercicio10/", (req, res) => {
    const { sexo, altura } = req.body;
    const resultado = calcularIMC(sexo, altura);
    res.status(201).json({ imc: resultado });
});

// Exercicio 11: Operação matemática entre dois números
app.get("/exercicio11/", (req, res) => {
    const { operacao, num1, num2 } = req.query;
    const resultado = calcularOperacao(operacao, Number(num1), Number(num2));
    res.json({ resultado });
});

app.post("/exercicio11/", (req, res) => {
    const { operacao, num1, num2 } = req.body;
    const resultado = calcularOperacao(operacao, num1, num2);
    res.status(201).json({ resultado });
});

// Exercicio 12: Verificação de número positivo ou negativo
app.get("/exercicio12/", (req, res) => {
    const num = Number(req.query.num);
    const resultado = verificarPositivoNegativo(num);
    res.json({ resultado });
});

app.post("/exercicio12/", (req, res) => {
    const { num } = req.body;
    const resultado = verificarPositivoNegativo(num);
    res.status(201).json({ resultado });
});

// Exercicio 13: Verificar se o número é par ou ímpar
app.get("/exercicio13/", (req, res) => {
    const num = Number(req.query.num);
    const resultado = verificarParImpar(num);
    res.json({ resultado });
});

app.post("/exercicio13/", (req, res) => {
    const { num } = req.body;
    const resultado = verificarParImpar(num);
    res.status(201).json({ resultado });
});

// Exercicio 14: Verificar qual número é maior
app.get("/exercicio14/", (req, res) => {
    const { num1, num2 } = req.query;
    const resultado = verificarMaiorNumero(Number(num1), Number(num2));
    res.json({ resultado });
});

app.post("/exercicio14/", (req, res) => {
    const { num1, num2 } = req.body;
    const resultado = verificarMaiorNumero(num1, num2);
    res.status(201).json({ resultado });
});

app.post("/exercicio15/", (req, res) => {
    // http://localhost:3000/exercicio1
    const { a, b, c } = req.body
    const resultado = verificaTriangulos2(a,b,c)
    res.status(201).json({ resultado })
})

// Exercicio 16: Imposto de Renda
app.get("/exercicio16/", (req, res) => {
    const { cpf, dependentes, rendaMensal, salarioMinimo } = req.query;
    const resultado = calcularImpostoRenda(cpf, dependentes, rendaMensal, salarioMinimo);
    res.json(resultado);
});

// Exercicio 17: Média Ponderada
app.get("/exercicio17/", (req, res) => {
    const { n1, n2, n3 } = req.query;
    const media = calcularMediaPonderada(n1, n2, n3);
    res.json({ media });
});

// Exercicio 18: Custo ao Consumidor de Carro
app.get("/exercicio18/", (req, res) => {
    const { custoFabrica } = req.query;
    const resultado = calcularCustoCarro(custoFabrica);
    res.json({ custoConsumidor: resultado });
});

// Exercicio 19: Juros Simples
app.get("/exercicio19/", (req, res) => {
    const { capital, taxa, tempo } = req.query;
    const resultado = calcularJuros(capital, taxa, tempo);
    res.json(resultado);
});

// Exercicio 20: Cálculo de valor de peças com IPI
app.get("/exercicio20/", (req, res) => {
    const { ipi, cod1, valor1, quant1, cod2, valor2, quant2 } = req.query;
    const valorTotal = calcularValorTotal(ipi, valor1, quant1, valor2, quant2);
    res.json({ valorTotal });
});

// Exercicio 21: Investigação Criminal
app.post("/exercicio21/", (req, res) => {
    const respostas = req.body.respostas;
    const resultado = investigarCrime(respostas);
    res.json({ resultado });
});

// Exercicio 22: Verificação de multa
app.get("/exercicio22/", (req, res) => {
    const { velocidadePermitida, velocidadePraticada } = req.query;
    const resultado = verificarMulta(velocidadePermitida, velocidadePraticada);
    res.json({ resultado });
});

// Exercicio 23: Escrever "Batata"
app.post("/exercicio23/", (req, res) => {
    const { num } = req.body;
    const resultado = repetirBatata(num);
    res.json({ resultado });
});

// Exercicio 24: Tabuada de um número
app.get("/exercicio24/", (req, res) => {
    const { num } = req.query;
    const resultado = tabuada(num);
    res.json({ tabuada: resultado });
});

// Exercício 25: Média de altura
app.post("/exercicio25/", (req, res) => {
    const { alturas } = req.body;  // Array de alturas
    const media = calcularMediaAlturaPessoas(alturas);
    res.json({ media });
});

// Exercício 26: Média de peso de 5 pessoas
app.post("/exercicio26/", (req, res) => {
    const { pesos } = req.body;  // Array de pesos
    if (pesos.length !== 5) {
        return res.status(400).json({ error: "Você deve fornecer exatamente 5 pesos." });
    }
    const media = calcularMediaPesoPessoas(pesos);
    res.json({ media });
});

// Exercício 27: Calcular peso no elevador
app.post("/exercicio27/", (req, res) => {
    const { pesos } = req.body;  // Array de pesos
    const resultado = verificarPesoElevador(pesos);
    res.json({ resultado });
});

// Exercício 28: Contar números negativos
app.post("/exercicio28/", (req, res) => {
    const { numeros } = req.body;  // Array de 10 números
    if (numeros.length !== 10) {
        return res.status(400).json({ error: "Você deve fornecer exatamente 10 números." });
    }
    const negativos = contarNegativos(numeros);
    res.json({ negativos });
});

// Exercício 29: Preencher array com 15 números aleatórios
app.get("/exercicio29/", (req, res) => {
    const numeros = preencherArrayComAleatorios();
    res.json({ numeros });
});

// Exercício 30: Preencher vetor com números aleatórios em intervalos
app.get("/exercicio30/", (req, res) => {
    const vetor = preencherVetorIntervalado();
    res.json({ vetor });
});


// Novo endpoint para o exercício 27 (Peso do Elevador)
app.post("/exercicio27/", (req, res) => {
    // http://localhost:3000/exercicio27
    const { pesos } = req.body; // Exemplo: [70, 50, 60]
    const resultado = calcularPesoElevador(pesos);
    res.status(201).json({ resultado });
});

app.listen(3000, () => {
    console.log('servidor está rodando na porta 3000')
})