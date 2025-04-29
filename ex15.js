console.log("Primeiros 10 números da sequência de Fibonacci:");

let a = 0, b = 1;

for (let i = 1; i <= 10; i++) {
  console.log(a);
  const proximo = a + b;
  a = b;
  b = proximo;
}
