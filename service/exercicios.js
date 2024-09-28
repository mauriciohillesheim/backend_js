function somar(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        return 'Informe um número'; // throw new Error('Informe um número')
    }
    return Number(num1) + Number(num2);    
}

function calculaSalario(valorHora, horasTrabalhadas) {
    if(isNaN(valorHora) || isNaN(horasTrabalhadas)) {
        return 'Informe um número'; // throw new Error('Informe um número')
    }
    return valorHora * horasTrabalhadas
}

// Primeira forma
function verificaTriangulos(a, b, c) {
    let resultado
    if ((a + b < c) || (a + c < b) || (b + c < a) ){
        resultado = 'Nao é um triangulo'
    } else if ((a == b) || (a == c)) {
        resultado = 'Equilatero'
    } else if ((a==b) || (a==c) || (b==c)) {
        resultado = 'Isósceles'
    } else {
        resultado = 'Escaleno'
    }

    return resultado
}

// Segunda forma
function verificaTriangulos2(a, b, c) {
    if(!a || !b || !c) {
        return "Não é um triangulo"
    }
    if ((a + b < c) || (a + c < b) || (b + c < a) ){
        return 'Nao é um triangulo'
    } else if ((a == b) || (a == c)) {
        return 'Equilatero'
    } else if ((a==b) || (a==c) || (b==c)) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

function calcularMediaPesos(pesos) {
    let soma = 0;
    for (let peso of pesos) {
        soma += peso;
    }
    return soma / pesos.length;
}

function converterCelsiusParaFahrenheit(celsius) {
    return (9 * celsius + 160) / 5;
}

function converterMilhasParaKm(milhas) {
    return milhas * 1.60934;
}

function converterSegundosParaTempo(segundos) {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segsRestantes = segundos % 60;
    return { horas, minutos, segundos: segsRestantes };
}

function converterKmParaM(cm) {
    return { metros: cm * 1000, centimetros: cm * 100000 };
}

function calcularTabuada(num) {
    let tabuada = [];
    for (let i = 1; i <= 10; i++) {
        tabuada.push(`${num} x ${i} = ${num * i}`);
    }
    return tabuada;
}

function calcularMediaNotas(n1, n2, n3) {
    const media = (n1 + n2 + n3) / 3;
    if (media >= 7) {
        return { media, status: "Aprovado" };
    } else if (media >= 5) {
        return { media, status: "Recuperação" };
    } else {
        return { media, status: "Reprovado" };
    }
}

function calcularIMC(sexo, altura) {
    if (sexo === 'H') {
        return (72.7 * altura) - 58;
    } else if (sexo === 'M') {
        return (62.1 * altura) - 44.7;
    }
    return null;
}

function calcularOperacao(operacao, num1, num2) {
    switch (operacao) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Divisão por zero não permitida';
        default:
            return 'Operação inválida';
    }
}

function verificarPositivoNegativo(num) {
    return num >= 0 ? 'Positivo' : 'Negativo';
}

function verificarParImpar(num) {
    return num % 2 === 0 ? 'Par' : 'Ímpar';
}

function verificarMaiorNumero(num1, num2) {
    if (num1 > num2) return `O número ${num1} é maior`;
    if (num2 > num1) return `O número ${num2} é maior`;
    return 'Os números são iguais';
}

// Exercício 16: Cálculo do imposto de renda
function calcularImpostoRenda(cpf, dependentes, rendaMensal, salarioMinimo) {
    const descontoDependentes = dependentes * (salarioMinimo * 0.05);
    const rendaAjustada = rendaMensal - descontoDependentes;

    let aliquota;
    if (rendaAjustada <= 2 * salarioMinimo) {
        aliquota = 0;
    } else if (rendaAjustada <= 3 * salarioMinimo) {
        aliquota = 0.05;
    } else if (rendaAjustada <= 5 * salarioMinimo) {
        aliquota = 0.10;
    } else if (rendaAjustada <= 7 * salarioMinimo) {
        aliquota = 0.15;
    } else {
        aliquota = 0.20;
    }

    const imposto = rendaAjustada * aliquota;
    return { cpf, rendaAjustada, aliquota, imposto };
}

// Exercício 17: Média ponderada de três notas
function calcularMediaPonderada(n1, n2, n3) {
    const media = (n1 * 2 + n2 * 3 + n3 * 5) / 10;
    return media;
}

// Exercício 18: Custo ao consumidor de um carro
function calcularCustoCarro(custoFabrica) {
    const distribuidor = custoFabrica * 0.28;
    const impostos = custoFabrica * 0.45;
    const custoConsumidor = custoFabrica + distribuidor + impostos;
    return custoConsumidor;
}

// Exercício 19: Cálculo de juros simples
function calcularJuros(capital, taxa, tempo) {
    const juros = capital * taxa * (tempo / 365);
    const montante = capital + juros;
    return { capital, juros, montante };
}

// Exercício 20: Cálculo do valor total de peças com IPI
function calcularValorTotal(ipi, cod1, valor1, quant1, cod2, valor2, quant2) {
    const valorTotal = (valor1 * quant1 + valor2 * quant2) * (ipi / 100 + 1);
    return valorTotal;
}

// Exercício 21: Investigação Criminal
function investigarCrime(respostas) {
    const positivas = respostas.filter(r => r === 'sim').length;

    if (positivas === 8) return 'Assassino';
    if (positivas >= 5) return 'Possível Criminoso';
    if (positivas === 4) return 'Suspeito do Crime';
    return 'Inocente';
}

// Exercício 22: Verificação de multa de velocidade
function verificarMulta(velocidadePermitida, velocidadePraticada) {
    const limite20 = velocidadePermitida * 1.2;
    if (velocidadePraticada > limite20) {
        return 'Multa de R$ 500,00';
    } else if (velocidadePraticada > velocidadePermitida) {
        return 'Multa de R$ 102,00';
    }
    return 'Sem multa';
}

// Exercício 23: Escreva "Batata" enquanto usuário digita 1
function repetirBatata(num) {
    if (num === 1) return 'Batata';
    return 'Encerrado';
}

// Exercício 24: Tabuada de um número
function tabuada(num) {
    const resultados = [];
    for (let i = 0; i <= 10; i++) {
        resultados.push(`${num} x ${i} = ${num * i}`);
    }
    return resultados;
}

// Exercício 25: Cálculo da média de altura
function calcularMediaAltura(alturas) {
    const somaAlturas = alturas.reduce((acc, altura) => acc + altura, 0);
    const media = somaAlturas / alturas.length;
    return media;
}

// Exercício 26: Cálculo da média de peso
function calcularMediaPeso(pesos) {
    const somaPesos = pesos.reduce((acc, peso) => acc + peso, 0);
    const media = somaPesos / pesos.length;
    return media;
}

// Exercício 27: Peso máximo de um elevador
function calcularPesoElevador(pesos) {
    let pesoTotal = 0;
    for (let peso of pesos) {
        pesoTotal += peso;
        if (pesoTotal >= 180) {
            return "Peso máximo atingido (180kg)";
        }
    }
    return `Peso total: ${pesoTotal}kg`;
}

// Exercício 28: Contar números negativos
function contarNumerosNegativos(numeros) {
    const negativos = numeros.filter(num => num < 0).length;
    return negativos;
}

// Exercício 29: Preencher array com 15 números aleatórios
function preencherArrayAleatorio() {
    const numeros = Array.from({ length: 15 }, () => Math.floor(Math.random() * 100));
    return numeros;
}

// Exercício 30: Preencher array com 5 números aleatórios em intervalos específicos
function preencherArrayIntervalos() {
    const numeros = [
        Math.floor(Math.random() * 8) + 1,
        Math.floor(Math.random() * 8) + 9,
        Math.floor(Math.random() * 6) + 17,
        Math.floor(Math.random() * 6) + 23,
        Math.floor(Math.random() * 6) + 24,
    ];
    return numeros;
}

// module.exports = somar // Exportando default, uma unica função
module.exports = {
    somar,
    calculaSalario,
    verificaTriangulos2,
    calcularPesoElevador, // Exportando a nova função
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
    calcularMediaAltura,
    calcularMediaPeso,
    calcularPesoElevador,
    contarNumerosNegativos,
    preencherArrayAleatorio,
    preencherArrayIntervalos
};
