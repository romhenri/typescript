/**
 * Recebe string '1.500,50' returna number '1500.50'
 */
export default function moedaParaNumero(moeda) {
    if (moeda === '-') {
        return null;
    }
    const valor = Number(moeda.replace(".", "").replace(",", "."));
    return valor;
}
