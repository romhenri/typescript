import countBy from "./countBy.js";

type TransacaoValor = Transacao & {valor: number};

function filterValue(transacao: Transacao): 
transacao is TransacaoValor {
  return transacao.valor !== null;
}

export default class Stats {
  transacoes;
  total;
  paymentsTotal;
  statusTotal;

  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes;
    this.total = this.setTotal();
    this.paymentsTotal = this.setPayment();
    this.statusTotal = this.setStatus();
  }
  private setTotal() {
    let total = 0;
    this.transacoes
    .filter(filterValue).forEach((item)=>{
      total += item.valor
    })
    return total;
  }
  private setPayment() {
    const payments = (this.transacoes.map(({pagamento})=> pagamento));

    const total = countBy(payments)

    console.log(total);
    return total
  }
  private setStatus() {
    const status = (this.transacoes.map(({status})=> status));

    const total = countBy(status)

    console.log(total);
    return total
  }
}