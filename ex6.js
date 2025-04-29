const readline = require('readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function classificarTriangulo(a, b, c) {
  a = parseFloat(a);
  b = parseFloat(b);
  c = parseFloat(c);

  if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    return "Erro: os lados devem ser números positivos.";
  }

  if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c) {
      return "Triângulo equilátero";
    } else if (a === b || a === c || b === c) {
      return "Triângulo isósceles";
    } else {
      return "Triângulo escaleno";
    }
  } else {
    return "Os lados fornecidos não formam um triângulo.";
  }
}

(async () => {
  try {
    console.log("--- Verificador de Triângulos ---");
    const a = await rl.question("Digite o lado A: ");
    const b = await rl.question("Digite o lado B: ");
    const c = await rl.question("Digite o lado C: ");

    const resultado = classificarTriangulo(a, b, c);
    console.log("\nResultado:", resultado);
  } catch (err) {
    console.error("Erro:", err);
  } finally {
    rl.close();
  }
})();
