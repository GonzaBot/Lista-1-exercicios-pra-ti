const readline = require('readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

(async () => {
  let soma = 0;

  try {
    for (let i = 1; i <= 5; i++) {
      const input = await rl.question(`Digite o ${i}º número: `);
      const numero = parseFloat(input);

      if (isNaN(numero)) {
        console.log("Erro: entrada inválida. Digite apenas números.");
        i--; // repete a iteração atual
        continue;
      }

      soma += numero;
    }

    console.log(`\nSoma total: ${soma}`);
  } catch (err) {
    console.error("Erro:", err);
  } finally {
    rl.close();
  }
})();
