// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const polybiusSquare = [
    ["a", "f", "l", "q", "v"],
    ["b", "g", "m", "r", "w"],
    ["c", "h", "n", "s", "x"],
    ["d", "(i/j)", "o", "t", "y"],
    ["e", "k", "p", "u", "z"],
  ]

  function polybius(input, encode = true) {
    if (!encode && input.split(" ").join("").length % 2 > 0) return false
    return input.replace(/\w+/g, match => {
      if (encode) {
        return match.toLowerCase().split('').map(element => {
          if (element == "i" || element == "j") element = '(i/j)'
          const colIndex = polybiusSquare.findIndex(column => {
            return column.includes(element)
          })
          const rowIndex = polybiusSquare[colIndex].findIndex(elm => elm == element)
          return `${colIndex + 1}${rowIndex + 1}`
        }).join('');
      } else {
        return match.match(/.{1,2}/g).map(element => {
          const column = Number(element[0]) - 1
          const row = Number(element[1]) - 1
          return polybiusSquare[column][row]
        }).join('');
      }
    })
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;