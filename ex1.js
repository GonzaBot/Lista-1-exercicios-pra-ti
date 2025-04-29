function verificaParImpar(num) {
    // Se o resto da divisão por 2 for 0, é par.
    if (num % 2 === 0) {
      console.log(`${num} é Par`);
    } else { // Senão, é ímpar.
      console.log(`${num} é Ímpar`);
    }
  }
  
  // --- Testando a função ---
  console.log("Verificando 22:");
  verificaParImpar(22);
  
  console.log("Verificando 15:");
  verificaParImpar(15);
  
  console.log("Verificando 0:");
  verificaParImpar(0);