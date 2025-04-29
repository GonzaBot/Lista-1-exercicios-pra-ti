const readline = require('readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

(async () => {
  try {
    const input = await rl.question("Digite um número inteiro: ");
    const numero = parseInt(input);

    if (isNaN(numero)) {
      console.log("Erro: valor inválido. Digite um número inteiro.");
    } else {
      for (let i = 1; i <= 10; i++) {
        console.log(`${i}. ${numero}`);
      }
    }
  } catch (err) {
    console.error("Erro:", err);
  } finally {
    rl.close();
  }
})();
