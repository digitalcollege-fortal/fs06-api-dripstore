const database = require('../../infrastructure/connection/database');

test('Garantir que a conexao com o banco de dados está ok', async () => {
    let conexao = await database.connect();

    expect(conexao).not.toBe(false);
});

test('Garante que a conexao permite executer queries', async () => {
    let conexao = await database.connect();

    let tabela = await conexao.execute('SHOW TABLES');
    
    //eu espero que o tipo da variavel tabela seja um array
    expect(typeof tabela).toBe('object');

    //eu espero que o tipo dado dentro do array seja um objeto
    expect(typeof tabela[0]).toBe('object');
})
