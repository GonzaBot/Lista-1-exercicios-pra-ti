const readline = require('readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

(async () => {
  try {
    const x = parseFloat(await rl.question("Digite o primeiro valor: "));
    const y = parseFloat(await rl.question("Digite o segundo valor (diferente do primeiro): "));

    if (isNaN(x) || isNaN(y)) {
      console.log("Erro: ambos os valores devem ser números.");
    } else if (x === y) {
      console.log("Erro: os valores não podem ser iguais.");
    } else {
      const menor = x < y ? x : y;
      const maior = x > y ? x : y;
      console.log(`\nValores em ordem crescente: ${menor}, ${maior}`);
    }
  } catch (err) {
    console.error("Erro:", err);
  } finally {
    rl.close();
  }
})();
