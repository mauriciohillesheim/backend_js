const { somar } = require('../service/exercicios')
const { describe, it, expect } = require('@jest/globals')

describe('Testes da função somar: ', () => {
    it('Somar dois números positivos', () => {
        const resultado = somar(1, 2);
        expect(resultado).toBe(3)
    })
})

// describe('Testes da função calculaSalario: ',() => {
//     const resultado = somar(-1, 2);
//     expect(resultado).toBe(1)
// })