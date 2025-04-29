const readline = require('readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

(async () => {
  let soma = 0;
  let contador = 0;

  try {
    while (true) {
      const input = await rl.question("Digite um número decimal (0 para sair): ");
      const numero = parseFloat(input);

      if (isNaN(numero)) {
        console.log("Valor inválido. Digite um número decimal.");
        continue;
      }

      if (numero === 0) break;

      soma += numero;
      contador++;
    }

    if (contador === 0) {
      console.log("Nenhum número foi digitado.");
    } else {
      const media = soma / contador;
      console.log(`\nMédia aritmética: ${media.toFixed(2)}`);
    }

  } catch (err) {
    console.error("Erro:", err);
  } finally {
    rl.close();
  }
})();
