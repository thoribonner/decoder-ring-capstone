// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // should return false if shift is 0/>25/<-25
  // should ignore capital letters
  // should handle shifting letters at the end of the alphabet
  // should maintain non alphas encoding and decoding

  const plainABC = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const end = plainABC.length;
  
  function _ciDecipher(char, shift){
    if (plainABC.indexOf(char) === -1) {
      return char;
    } else {
      let toShiftTo = plainABC.indexOf(char) + shift;
      if (toShiftTo >= end) toShiftTo = toShiftTo - end;
      if (toShiftTo < 0) toShiftTo = end + toShiftTo;
      return plainABC[toShiftTo];
    }
  };
  
  function caesar(input, shift, encode = true) {
    // returns false if shift is not up to standards
    if (shift < -25 || shift === 0 || shift > 25) return false;
    const output = [];
    // convert to lowercase to avoid matching errors
    const inputted = [...input.toLowerCase()];
    // convert the shift for decoding (works whether user converts it or not)
    if (!encode) shift = -shift;
    // loops each character and returns shifted character
    for (const char of inputted) {
        output.push(_ciDecipher(char, shift))
    }
    return output.join('');
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
