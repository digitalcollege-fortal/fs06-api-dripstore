const database = require('../../connection/database');
const {DateTime} = require('luxon'); 

async function findAll() {
    let dados = await database.execute('SELECT * FROM tb_shopping_cart');

    return dados; 
}

async function findOne(id) {
    let dados = await database.execute(`SELECT * FROM tb_shopping_cart WHERE id='${id}'`);

    return dados[0];
}

async function save(dados) {
    let hoje = DateTime.now().toFormat('yyyy-MM-dd HH:mm:ss');

    let query = `
        INSERT INTO tb_shopping_cart 
        (produto, cliente, endereco, valor_total, quantidade, criado_em)
        VALUES
        (
            '${dados.produto}', 
            '${dados.cliente}', 
            '${dados.endereco}', 
            '${dados.valor_total}', 
            '${dados.quantidade}', 
            '${hoje}'
        )
    `;

    let resultado = await database.execute(query);

    dados.id = resultado.insertId; //vai pegar o id que foi gerado no banco

    return dados;
}


module.exports = {
    findAll, //buscar todos
    findOne,
    save,
}


