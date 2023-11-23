"use strict";
// Os parâmetros das funções são tipado como "any" para o TypeScript permitir que qualquer tipo seja passado, apesar de querermos verificar um tipo epecífico, para usar a afunção isso é necessário.
// "typeof" pode ser interpretado como uma função "inline" que retorna uma string com o nome do tipo. typeof 2 => 'number'
function isANumber(data) {
    return typeof data === 'number' && !isNaN(data);
}
// Atenção: NaN é do tipo number! Sim, é estranho.
function isAnArray(data) {
    return Array.isArray(data);
}
function isNull(data) {
    return data === null;
}
function isObject(data) {
    return typeof data === 'object' && data !== null && !Array.isArray(data);
}
function isFunction(data) {
    return typeof data === 'function';
}
function isDate(data) {
    return data instanceof Date;
}
console.log(isANumber(1)); // true
console.log(isAnArray([1, 2, 3])); // true
console.log(isNull(null)); // true
console.log(isObject({ chave: 'valor' })); // true
console.log(isFunction(function () { })); // true
console.log(isDate(new Date())); // true
