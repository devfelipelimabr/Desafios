function countTrue(arr) {
    if (!Array.isArray(arr)) {
      throw new Error("O parâmetro não é um array.");
    }
  
    let count = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'boolean' && arr[i] === true) {
        count++;
      }
    }
  
    return count;
  }
  
  module.exports = countTrue;
  