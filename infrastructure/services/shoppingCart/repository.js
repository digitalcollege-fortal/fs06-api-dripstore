function findAll() {
    let dados = [
        {
            id: 123
        }
    ];

    return dados;
}

function findOne(id) {
    let dados = {
        id: 123
    };

    return dados;
}

function save(dados) {
    //INSERT INTO tabela...
    dados.id = 456;

    return dados;
}


module.exports = {
    findAll, //buscar todos
    findOne,
    save,
}


