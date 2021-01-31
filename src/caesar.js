// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (shift == 0 || shift < -25 || shift > 25 || shift == undefined) return false
    if (!encode) shift *= -1 
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return input.replace(/\w+/g, match => {
      return match.split('').map(element => {
        element = element.toLowerCase()
        if (shift < 0) shift += 26
        const shiftedElement = alphabet[(alphabet.indexOf(element) + shift) % 26]
        return alphabet.includes(element) ? shiftedElement : element
      }).join('');
    })
  }
  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;

caesarModule.caesar("abc", 3, false); //> 'abc' 