function somar(n1, n2) {
    return Number(
        (n1 + n2).toFixed(2)
    );
}

function aplicarDesconto(valor, desconto) {
    if (desconto < 1 || desconto > 100) {
        return "invalid_discount";
    }

    return valor - (valor * desconto) / 100;

    // let descontoFinal = 1 - (desconto / 100);

    // return Number((valor * descontoFinal).toFixed(2));
}

module.exports = {
    somar,
    aplicarDesconto,
};
