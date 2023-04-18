const repository = require('../../infrastructure/services/shoppingCart/repository');

test('Garante que a funcao findAll retorna um array de elementos', () => {
    let resultado = repository.findAll();

    expect(Array.isArray(resultado)).toBe(true);

    if (resultado.length > 0) {
        expect(typeof resultado[0]).toBe('object');
        expect(typeof resultado[0].id).toBe('number');
    }
});

test('Garante que a funcao findOne retorna um objeto valido', () => {
    let resultado = repository.findOne(123);

    expect(typeof resultado).toBe('object');
    expect(typeof resultado.id).toBe('number');
    expect(resultado.id).toBe(123);
});

test('Garante que a funcao save retorna um id valido', () => {
    let resultado = repository.save({
        quantidade: 3,
        produtos: [],
        valorTotal: 0
    });

    expect(typeof resultado.id).toBe('number');
});
