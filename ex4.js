
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,  
  output: process.stdout 
});


function processaEscolha(opcao) {
  
  const escolhaNum = parseInt(opcao, 10);

  
  switch (escolhaNum) {
    case 1:
      console.log("\n-> Opção 1: Olá do Node.js!"); 
      break;
    case 2:
      const agora = new Date(); 
      const dataFormatada = agora.toLocaleString('pt-BR', { timeZone: 'America/Montevideo' });
      console.log(`\n-> Opção 2: Data/Hora (Montevidéu): ${dataFormatada}`); 
      break;
    case 3:
      console.log("\n-> Opção 3: Fechando o programa Node.js...");
      break;
    default:
      console.log("\n-> Opção inválida. Tente 1, 2 ou 3.");
  }
}

// 4. Función que muestra el menú y hace la pregunta
function iniciarMenuNode() {
  
  console.log("\n===== MENU (NODE.JS) =====");
  console.log("1. Cumprimentar");
  console.log("2. Mostrar Data/Hora (Montevidéu)");
  console.log("3. Sair");
  console.log("==========================");

  
  rl.question("Digite o número da sua opção e pressione Enter: ", (resposta) => {
    

    
    processaEscolha(resposta);

    
    rl.close();
  });
}


iniciarMenuNode();