const faturamento = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
};

const total = Object.values(faturamento).reduce((a, valor) => a + valor, 0);

console.log("Percentual de representação por estado:");

Object.entries(faturamento).forEach(([estado, fat]) => {

    const percentual = (fat / total) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
    
});
