const readline = require('readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

(async () => {
  try {
    const input = await rl.question("Digite um número para ver a tabuada: ");
    const numero = parseFloat(input);

    if (isNaN(numero)) {
      console.log("Erro: valor inválido. Digite um número.");
    } else {
      console.log(`\nTabuada do ${numero}:`);
      for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
      }
    }
  } catch (err) {
    console.error("Erro:", err);
  } finally {
    rl.close();
  }
})();
