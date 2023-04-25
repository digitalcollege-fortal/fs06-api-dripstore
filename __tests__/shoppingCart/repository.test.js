
const repository = require('../../infrastructure/services/shoppingCart/repository');

test('Garante que a funcao findAll retorna um array de elementos', async () => {
    let resultado = await repository.findAll();

    expect(Array.isArray(resultado)).toBe(true);

    if (resultado.length > 0) {
        expect(typeof resultado[0]).toBe('object');
        expect(typeof resultado[0].id).toBe('number');

        expect(typeof resultado[0].quantidade).toBe('number');
        expect(typeof resultado[0].valor_total).toBe('number');
        
        expect(resultado[0].quantidade).toBeGreaterThan(0); //espero que a quantidade seja maior que 0 
        
        expect(resultado[0].valor_total < 0).toBe(false); //espero que o valor_total nao seja menor que zero 
    }
});

test('Garante que a funcao findOne retorna um objeto valido', async () => {
    let resultado = await repository.findOne(123);

    if (resultado) {
        expect(typeof resultado).toBe('object');
        expect(typeof resultado.id).toBe('number');
        expect(resultado.id).toBe(123);
    } 
});

test('Garante que a funcao save retorna um id valido', async () => {
    let resultado = await repository.save({
        quantidade: 3,
        valor_total: 100.90,
        cliente: 'Victor Adler',
        endereco: 'Rua X, Maracanau',
        produto: 'Teclado retroiluminado',
    });

    expect(typeof resultado.id).toBe('number');
    expect(resultado.id).toBeGreaterThan(0);

    let dados = await repository.findOne(resultado.id);

    expect(dados.produto).toBe('Teclado retroiluminado');
});
