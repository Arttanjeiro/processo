function fibonacci(n) {
  const sequence = [0, 1];

  for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}

// Chamando a função para gerar os primeiros 10 números na sequência de Fibonacci
const sequenceOfTen = fibonacci(10);
console.log(sequenceOfTen);
