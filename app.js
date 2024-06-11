function calcularArea(diametro) {
    const raio = diametro / 2;
    return Math.PI * (raio ** 2);
}

function calculate() {
    // Obtendo os valores de entrada
    const originalDiameter = parseFloat(document.getElementById('originalDiameter').value);
    const originalQuantity = parseInt(document.getElementById('originalQuantity').value);

    const replacementDiameters = document.getElementById('replacementDiameters').value.split(',').map(Number);
    const replacementQuantities = document.getElementById('replacementQuantities').value.split(',').map(Number);

    // Calculando a área total das barras originais
    const areaTotalOriginal = originalQuantity * calcularArea(originalDiameter);

    // Calculando a área total das barras de substituição
    const areaTotalSubstituicao = replacementDiameters.reduce((total, diametro, index) => {
        return total + (replacementQuantities[index] * calcularArea(diametro));
    }, 0);

    // Exibindo os resultados
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <p>Área total das barras originais: ${areaTotalOriginal.toFixed(2)} mm²</p>
        <p>Área total das barras de substituição: ${areaTotalSubstituicao.toFixed(2)} mm²</p>
    `;
}

// Registro do Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, err => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
