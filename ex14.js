const readline = require('readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

(async () => {
  try {
    const input = await rl.question("Digite um número inteiro não negativo: ");
    const numero = parseInt(input);

    if (isNaN(numero) || numero < 0) {
      console.log("Erro: digite um número inteiro não negativo.");
    } else {
      let fatorial = 1;
      for (let i = 2; i <= numero; i++) {
        fatorial *= i;
      }
      console.log(`\n${numero}! = ${fatorial}`);
    }
  } catch (err) {
    console.error("Erro:", err);
  } finally {
    rl.close();
  }
})();
