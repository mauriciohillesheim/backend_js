const { somar,
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
    preencherVetorIntervalado  } = require('../service/exercicios')
const { describe, it, expect } = require('@jest/globals')

describe('Testes da função somar: ', () => {
    
    it('Somar dois números positivos', () => {
        const resultado = somar(1, 2);
        expect(resultado).toBe(3)
    })

    it('Somar um número negativo com um positivo', () => {
        const resultado = somar(-1, 2);
        expect(resultado).toBe(1)
    })

    it('Somar um número positivo com um negativo', () => {
        const resultado = somar(1, -2);
        expect(resultado).toBe(-1)
    })

    it('Somar um número negativo com zero', () => {
        const resultado = somar(-1, 0);
        expect(resultado).toBe(-1)
    })
    
    it('Somar zero com um número negativo', () => {
        const resultado = somar(0, -2);
        expect(resultado).toBe(-2)
    })

    it('Somar um número com uma letra', () => {
        const resultado = somar(1, 'a');
        expect(resultado).toBe('Informe um número')
    })
    
    it('Somar uma letra com um número', () => {
        const resultado = somar('b', 2);
        expect(resultado).toBe('Informe um número')
    })
    
})

describe('Testes da função calculaSalario: ', () => {
    
    it('Calcular salário com horas trabalhadas e valor por hora positivos', () => {
        const resultado = calculaSalario(40, 25); // 40 horas, R$ 25/hora
        expect(resultado).toBe(1000);
    })

    it('Calcular salário com horas trabalhadas sendo zero', () => {
        const resultado = calculaSalario(0, 25); // 0 horas, R$ 25/hora
        expect(resultado).toBe(0);
    })

    it('Calcular salário com valor por hora sendo zero', () => {
        const resultado = calculaSalario(40, 0); // 40 horas, R$ 0/hora
        expect(resultado).toBe(0);
    })

    it('Calcular salário com horas negativas', () => {
        const resultado = calculaSalario(-40, 25); // Horas negativas, R$ 25/hora
        expect(resultado).toBe('Horas trabalhadas não podem ser negativas');
    })

    it('Calcular salário com valor por hora negativo', () => {
        const resultado = calculaSalario(40, -25); // 40 horas, valor negativo
        expect(resultado).toBe('Valor por hora não pode ser negativo');
    })

    it('Calcular salário com entrada não numérica para horas trabalhadas', () => {
        const resultado = calculaSalario('quarenta', 25); // Entrada inválida para horas
        expect(resultado).toBe('Informe números válidos para as horas trabalhadas');
    })

    it('Calcular salário com entrada não numérica para valor por hora', () => {
        const resultado = calculaSalario(40, 'vinte e cinco'); // Entrada inválida para valor por hora
        expect(resultado).toBe('Informe um número válido para o valor por hora');
    })

    it('Calcular salário com ambos os parâmetros não numéricos', () => {
        const resultado = calculaSalario('quarenta', 'vinte e cinco'); // Entradas inválidas para ambos
        expect(resultado).toBe('Informe números válidos para as horas e valor por hora');
    })
})

describe('Testes das funções de exercícios:', () => {

    it('verificaTriangulos2 - deve verificar se é um triângulo e o tipo', () => {
        const resultado = verificaTriangulos2(3, 3, 3);
        expect(resultado).toBe('Triângulo Equilátero');
    });

    it('calcularMediaPesos - deve calcular a média dos pesos', () => {
        const resultado = calcularMediaPesos([70, 80, 90, 60, 50]);
        expect(resultado).toBe(70);
    });

    it('converterCelsiusParaFahrenheit - deve converter Celsius para Fahrenheit', () => {
        const resultado = converterCelsiusParaFahrenheit(0);
        expect(resultado).toBe(32);
    });

    it('converterMilhasParaKm - deve converter milhas para quilômetros', () => {
        const resultado = converterMilhasParaKm(1);
        expect(resultado).toBeCloseTo(1.60934, 5);
    });

    it('converterSegundosParaTempo - deve converter segundos para hh:mm:ss', () => {
        const resultado = converterSegundosParaTempo(3661);
        expect(resultado).toBe('01:01:01');
    });

    it('converterKmParaM - deve converter quilômetros para metros', () => {
        const resultado = converterKmParaM(5);
        expect(resultado).toBe(5000);
    });

    it('calcularTabuada - deve calcular a tabuada do número', () => {
        const resultado = calcularTabuada(2);
        expect(resultado).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
    });

    it('calcularMediaNotas - deve calcular a média de 3 notas', () => {
        const resultado = calcularMediaNotas(6, 7, 8);
        expect(resultado).toBe('Aprovado');
    });

    it('calcularIMC - deve calcular o IMC para um homem', () => {
        const resultado = calcularIMC('H', 1.8);
        expect(resultado).toBeCloseTo(71.86, 2);
    });

    it('calcularOperacao - deve calcular a operação solicitada', () => {
        const resultado = calcularOperacao(2, 3, '+');
        expect(resultado).toBe(5);
    });

    it('verificarPositivoNegativo - deve verificar se o número é positivo ou negativo', () => {
        const resultado = verificarPositivoNegativo(-1);
        expect(resultado).toBe('Negativo');
    });

    it('verificarParImpar - deve verificar se o número é par ou ímpar', () => {
        const resultado = verificarParImpar(3);
        expect(resultado).toBe('Ímpar');
    });

    it('verificarMaiorNumero - deve verificar qual é o maior número', () => {
        const resultado = verificarMaiorNumero(2, 3);
        expect(resultado).toBe(3);
    });

    it('calcularImpostoRenda - deve calcular o imposto de renda', () => {
        const resultado = calcularImpostoRenda(5000, 2);
        expect(resultado).toBeCloseTo(475, 2);
    });

    it('calcularMediaPonderada - deve calcular a média ponderada', () => {
        const resultado = calcularMediaPonderada(6, 7, 8);
        expect(resultado).toBeCloseTo(7.2, 1);
    });

    it('calcularCustoCarro - deve calcular o custo ao consumidor de um carro novo', () => {
        const resultado = calcularCustoCarro(10000);
        expect(resultado).toBe(17300);
    });

    it('calcularJuros - deve calcular os juros simples', () => {
        const resultado = calcularJuros(1000, 0.05, 30);
        expect(resultado).toBe(1050);
    });

    it('calcularValorTotal - deve calcular o valor total com IPI', () => {
        const resultado = calcularValorTotal(100, 2, 150, 1, 10);
        expect(resultado).toBe(550);
    });

    it('investigarCrime - deve classificar a pessoa de acordo com as respostas', () => {
        const resultado = investigarCrime(['sim', 'sim', 'não', 'não', 'sim', 'não', 'não', 'sim']);
        expect(resultado).toBe('Suspeito do Crime');
    });

    it('verificarMulta - deve calcular a multa de acordo com a velocidade', () => {
        const resultado = verificarMulta(100, 120);
        expect(resultado).toBe(102);
    });

    it('repetirBatata - deve repetir "Batata" enquanto o usuário digita 1', () => {
        const resultado = repetirBatata(1);
        expect(resultado).toBe('Batata');
    });

    it('tabuada - deve imprimir a tabuada do número', () => {
        const resultado = tabuada(5);
        expect(resultado).toEqual([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
    });

    it('calcularMediaAlturaPessoas - deve calcular a média da altura das pessoas', () => {
        const resultado = calcularMediaAlturaPessoas([1.70, 1.80, 1.75]);
        expect(resultado).toBeCloseTo(1.75, 2);
    });

    it('calcularMediaPesoPessoas - deve calcular a média do peso de 5 pessoas', () => {
        const resultado = calcularMediaPesoPessoas([70, 80, 90, 60, 50]);
        expect(resultado).toBe(70);
    });

    it('verificarPesoElevador - deve verificar se o peso do elevador atingiu o máximo', () => {
        const resultado = verificarPesoElevador([70, 60, 50]);
        expect(resultado).toBe('Peso dentro do limite');
    });

    it('contarNegativos - deve contar quantos números são negativos', () => {
        const resultado = contarNegativos([-1, 2, -3, 4, -5]);
        expect(resultado).toBe(3);
    });

    it('preencherArrayComAleatorios - deve preencher um array com 15 números aleatórios', () => {
        const resultado = preencherArrayComAleatorios();
        expect(resultado.length).toBe(15);
    });

    it('preencherVetorIntervalado - deve preencher um vetor com 5 números aleatórios dentro de intervalos', () => {
        const resultado = preencherVetorIntervalado();
        expect(resultado.length).toBe(5);
        expect(resultado[0]).toBeGreaterThanOrEqual(1);
        expect(resultado[0]).toBeLessThanOrEqual(8);
        expect(resultado[1]).toBeGreaterThanOrEqual(9);
        expect(resultado[1]).toBeLessThanOrEqual(16);
        // Continue validando os intervalos para as demais posições
    });
});
