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
console.log("Testando...");
function handleData() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchData("https://api.origamid.dev/json/transacoes.json?");
        if (!data)
            return;
        const transacoes = data.map(normalizarTrasacao);
        if (transacoes) {
            transacoes.forEach((item) => {
                console.log(item.email);
            });
        }
    });
}
handleData();
