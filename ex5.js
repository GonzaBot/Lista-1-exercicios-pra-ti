const readline = require('readline/promises');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularIMC(peso, altura) {
  peso = parseFloat(peso);
  altura = parseFloat(altura);

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0)
    return "Erro: Peso e altura devem ser números positivos.";

  if (altura > 3) altura /= 100;

  const imc = peso / (altura * altura);
  const imcFixado = imc.toFixed(1);

  const categoria = imc < 18.5 ? "Baixo peso" :
                    imc < 25    ? "Peso normal" :
                    imc < 30    ? "Sobrepeso" :
                                  "Obesidade";

  return `Seu IMC é ${imcFixado}. Categoria: ${categoria}`;
}

(async () => {
  console.log("--- Calculadora de IMC ---");

  try {
    const peso = await rl.question("Digite seu peso (kg): ");
    const altura = await rl.question("Digite sua altura (m ou cm): ");
    console.log("\nResultado:", calcularIMC(peso, altura));
  } catch (err) {
    console.error("Erro:", err);
  } finally {
    rl.close();
  }
})();
