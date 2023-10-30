import fetchData from "./fetchData.js";

console.log("Testando...");

async function handleData() {
  const data = await fetchData("https://api.origamid.dev/json/transacoes.json")
}

handleData()

