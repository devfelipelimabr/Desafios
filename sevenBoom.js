function SevenBoom(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("O parâmetro não é um array.");
  }

  let boom = false;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !isNaN(arr[i])) {
      let stringfyArr = arr[i].toString();
      for (let j = 0; j < stringfyArr.length; j++) {
        if (stringfyArr[j] === "7") {
          boom = true;
          break;
        }
      }
    }
    if (boom) {
      break;
    }
  }
  return boom;
}

module.exports = SevenBoom;
