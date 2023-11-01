import fetchData from "./fetchData.js";
import normalizarTrasacao from "./normalizarTrasacao.js";

console.log("Testando1...");
var transacoes = null;

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>("https://api.origamid.dev/json/transacoes.json?")

  if (!data) return

  transacoes = data.map(normalizarTrasacao)

  if (transacoes) {
    loadTable(transacoes)
  }
}

handleData()

function loadTable(readyData: Transacao[]):void {
  const table = document.querySelector("table tbody")
  console.log(table);

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
