function classificaNota(nota) {
    if (typeof nota !== 'number' || nota < 0 || nota > 10) {
      return "Nota inválida";
    }
  
    if (nota < 5.0) {
      return "Reprovado";
    } else if (nota < 7.0) {
      return "Recuperação";
    } else {
      return "Aprovado";
    }
  }
  
  // Testes
  console.log(`Nota 3: ${classificaNota(3)}`);
  console.log(`Nota 5.5: ${classificaNota(5.5)}`);
  console.log(`Nota 8: ${classificaNota(8)}`);
  console.log(`Nota 10: ${classificaNota(10)}`);
  console.log(`Nota 0: ${classificaNota(0)}`);
  console.log(`Nota 4.99: ${classificaNota(4.99)}`);
  console.log(`Nota 5.0: ${classificaNota(5.0)}`);
  console.log(`Nota 6.9: ${classificaNota(6.9)}`);
  console.log(`Nota 7.0: ${classificaNota(7.0)}`);
  console.log(`Nota -2: ${classificaNota(-2)}`);
  console.log(`Nota 15: ${classificaNota(15)}`);
  console.log(`Nota "A": ${classificaNota("A")}`);