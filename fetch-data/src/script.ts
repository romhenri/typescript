import fetchData from "./fetchData.js";
import normalizarTrasacao from "./normalizarTrasacao.js";
import Stats from "./Stats.js";

console.log("Testando1...");
var transacoes = null;

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>("https://api.origamid.dev/json/transacoes.json?")

  if (!data) return

  transacoes = data.map(normalizarTrasacao)

  if (transacoes) {
    loadTable(transacoes)
    loadStats(transacoes)
  }
}

handleData()

function loadStats(transacoes: Transacao[]):void {
  const data = new Stats(transacoes)

  const totalElement = document.querySelector<HTMLElement>('.total span')

  if (!totalElement) return
   
  totalElement.innerText = `${data.total.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
  })}`
}

function loadTable(readyData: Transacao[]):void {
  const table = document.querySelector("table tbody")
  // console.log(table);

  if(!table) return
  
  readyData.forEach((item)=> {
    table.innerHTML += `
    <tr>
      <td>${item.nome}</td>
      <td>${item.email}</td>
      <td>${item.moeda}</td>
      <td>${item.pagamento}</td>
      <td>${item.status}</td>
    </tr>
    `
  })
}
