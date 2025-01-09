const faturamento = [
    { "dia": 1, "valor": 2210.45 },
    { "dia": 2, "valor": 0 },
    { "dia": 3, "valor": 1250.60 },
    { "dia": 4, "valor": 3000.12 },
    { "dia": 5, "valor": 0 },
    { "dia": 6, "valor": 1500.34 },
    { "dia": 7, "valor": 2750.00 },
    { "dia": 8, "valor": 2210.45 },
    { "dia": 9, "valor": 0 },
    { "dia": 10, "valor": 1250.60 },
    { "dia": 11, "valor": 3000.12 },
    { "dia": 12, "valor": 0 },
    { "dia": 13, "valor": 1500.34 },
    { "dia": 14, "valor": 2750.00 }
];

console.log(faturamento)

const diasComFaturamento = faturamento.filter(faturamentoDiario => faturamentoDiario.valor > 0);

const menorValor = Math.min(...diasComFaturamento.map(data => data.valor));
const maiorValor = Math.max(...diasComFaturamento.map(data => data.valor));

const somaFaturamento = diasComFaturamento.reduce((soma, faturamento) => soma + faturamento.valor, 0);
const mediaMensal = somaFaturamento / diasComFaturamento.length;

const maioresMedia = diasComFaturamento.filter((data) => data.valor > mediaMensal);

console.log('==========');

console.log(`Menor valor de faturamento: ${menorValor}`);
console.log(`Maior valor de faturamento: ${maiorValor}`);
console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${maioresMedia.length}`);