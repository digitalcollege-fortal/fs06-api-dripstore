const calculadora = require('../src/calculadora');

test('garantindo que a funcao consegue somar 10 mais 10', () => {
    let resultado = calculadora.somar(10, 10);

    expect(resultado).toBe(20);
});

test('garantindo que a funcao consegue somar numeros reais', () => {
    let resultado = calculadora.somar(2.3, 2.4);

    expect(resultado).toBe(4.7);
});

test('garante que a funcao consegue somar numeros reais maiores', () => {
    // 145.89 + 134.77 = 280.66
    let resultado = calculadora.somar(145.89, 134.77);

    expect(resultado).toBe(280.66);
});

test('Garante que a funcao calcula o desconto corretamente', () => {
    let resultado = calculadora.aplicarDesconto(250, 10);

    expect(resultado).toBe(225);
});

test('Garante que a funcao calcula o desconto com valores reais', () => {
    let resultado = calculadora.aplicarDesconto(500.1, 5);

    expect(resultado).toBe(475.095);
});

test('Garante que a funcao aplica o desconto com porcentagem quebrada', () => {
    let resultado = calculadora.aplicarDesconto(500.1, 6.5);
    
    expect(resultado).toBe(467.5935);
});

test('Garante que a funcao nao aplica desconto maior que 100%', () => {
    let resultado = calculadora.aplicarDesconto(200, 110);

    expect(typeof resultado).not.toBe('number');
    expect(resultado).toBe('invalid_discount')
});

test('Garante que a funcao nao aplica desconto menor que 1%', () => {
    let resultado = calculadora.aplicarDesconto(200, 0.5);

    expect(typeof resultado).not.toBe('number');
    expect(resultado).toBe('invalid_discount');
});
