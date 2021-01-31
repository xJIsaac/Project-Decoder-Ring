// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (alphabet == undefined || alphabet.length !== 26 || /(.).*\1/.test(alphabet)) return false
    const normalAlphabet = "abcdefghijklmnopqrstuvwxyz"
    return input.replace(/[^ ]+/g, match => {
      return match.split('').map(element => {
        element = element.toLowerCase()
        if (encode) {
          return alphabet[normalAlphabet.indexOf(element)]
        } else {
          return normalAlphabet[alphabet.indexOf(element)]
        }
      }).join('');
    });
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;