const readline = require('readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

(async () => {
  try {
    const input = await rl.question("Quantas maçãs você deseja comprar? ");
    const quantidade = parseInt(input);

    if (isNaN(quantidade) || quantidade <= 0) {
      console.log("Erro: informe um número inteiro positivo.");
    } else {
      const precoUnitario = quantidade < 12 ? 0.30 : 0.25;
      const total = quantidade * precoUnitario;
      console.log(`\nValor total da compra: R$ ${total.toFixed(2)}`);
    }
  } catch (err) {
    console.error("Erro:", err);
  } finally {
    rl.close();
  }
})();
