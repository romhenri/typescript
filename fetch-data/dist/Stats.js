import countBy from "./countBy.js";
function filterValue(transacao) {
    return transacao.valor !== null;
}
export default class Stats {
    constructor(transacoes) {
        this.transacoes = transacoes;
        this.total = this.setTotal();
        this.paymentsTotal = this.setPayment();
        this.statusTotal = this.setStatus();
    }
    setTotal() {
        let total = 0;
        this.transacoes
            .filter(filterValue).forEach((item) => {
            total += item.valor;
        });
        return total;
    }
    setPayment() {
        const payments = (this.transacoes.map(({ pagamento }) => pagamento));
        const total = countBy(payments);
        console.log(total);
        return total;
    }
    setStatus() {
        const status = (this.transacoes.map(({ status }) => status));
        const total = countBy(status);
        console.log(total);
        return total;
    }
}
