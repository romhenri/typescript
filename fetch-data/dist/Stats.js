function filterValue(transacao) {
    return transacao.valor !== null;
}
export default class Stats {
    constructor(transacoes) {
        this.transacoes = transacoes;
        this.total = this.setTotal();
    }
    setTotal() {
        //  console.log(this.transacoes.filter(filterValue));
        let total = 0;
        this.transacoes
            .filter(filterValue).forEach((item) => {
            total += item.valor;
        });
        return total;
    }
}
