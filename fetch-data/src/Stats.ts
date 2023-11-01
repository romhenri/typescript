type TransacaoValor = Transacao & {valor: number};

function filterValue(transacao: Transacao): 
transacao is TransacaoValor {
  return transacao.valor !== null;
}

export default class Stats {
  transacoes;
  total;
  
  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes;
    this.total = this.setTotal();
  }
  private setTotal() {
    //  console.log(this.transacoes.filter(filterValue));

    let total = 0;
    this.transacoes
    .filter(filterValue).forEach((item)=>{
      total += item.valor
    })
    return total;
  }
}