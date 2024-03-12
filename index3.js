function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
  }
  return reversed;
}

// Exemplo de uso:
const originalString = "Hello, world!";
const reversedString = reverseString(originalString);
console.log(reversedString); // Saída: "!dlrow ,olleH"
