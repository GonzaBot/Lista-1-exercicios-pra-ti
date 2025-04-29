function classificaIdade(idade) {
    if (typeof idade !== 'number' || idade < 0 || !Number.isInteger(idade)) {
      return "Idade inválida"; 
    }
  
    if (idade <= 12) {
      return "Criança";
    } else if (idade <= 17) {
      return "Adolescente";
    } else if (idade <= 59) {
      return "Adulto";
    } else {
      return "Idoso";
    }
  }
  
  // --- Testando a função ---
  console.log(`Idade 5: ${classificaIdade(5)}`);    
  console.log(`Idade 14: ${classificaIdade(14)}`);    
  console.log(`Idade 25: ${classificaIdade(25)}`);    
  console.log(`Idade 70: ${classificaIdade(70)}`);    
  
  console.log("--- Testando Limites ---");
  console.log(`Idade 12: ${classificaIdade(12)}`);    
  console.log(`Idade 13: ${classificaIdade(13)}`);    
  console.log(`Idade 17: ${classificaIdade(17)}`);    
  console.log(`Idade 18: ${classificaIdade(18)}`);    
  console.log(`Idade 59: ${classificaIdade(59)}`);    
  console.log(`Idade 60: ${classificaIdade(60)}`);    
  
  console.log("--- Testando Inválidos ---");
  console.log(`Idade -3: ${classificaIdade(-3)}`);    
  console.log(`Idade 10.5: ${classificaIdade(10.5)}`); 
  console.log(`Idade 'abc': ${classificaIdade('abc')}`); 

  