import fetchData from "./fetchData.js";
import normalizarTrasacao from "./normalizarTrasacao.js";

console.log("Testando...");

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>("https://api.origamid.dev/json/transacoes.json?")

  if (!data) return

  const transacoes = data.map(normalizarTrasacao)

  if (transacoes) {
    transacoes.forEach((item) => {
      console.log(item.email);
    });
  }
}

handleData()

