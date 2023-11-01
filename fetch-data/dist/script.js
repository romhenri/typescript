var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fetchData from "./fetchData.js";
import normalizarTrasacao from "./normalizarTrasacao.js";
import Stats from "./Stats.js";
console.log("Testando1...");
var transacoes = null;
function handleData() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchData("https://api.origamid.dev/json/transacoes.json?");
        if (!data)
            return;
        transacoes = data.map(normalizarTrasacao);
        if (transacoes) {
            loadTable(transacoes);
            loadStats(transacoes);
        }
    });
}
handleData();
function loadStats(transacoes) {
    const data = new Stats(transacoes);
    const totalElement = document.querySelector('.total span');
    if (!totalElement)
        return;
    totalElement.innerText = `${data.total.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    })}`;
}
function loadTable(readyData) {
    const table = document.querySelector("table tbody");
    // console.log(table);
    if (!table)
        return;
    readyData.forEach((item) => {
        table.innerHTML += `
    <tr>
      <td>${item.nome}</td>
      <td>${item.email}</td>
      <td>${item.moeda}</td>
      <td>${item.pagamento}</td>
      <td>${item.status}</td>
    </tr>
    `;
    });
}
