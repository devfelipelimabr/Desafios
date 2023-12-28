function torreDeHanoi(n, Orig, Temp, Dest) {
  const pilha = [];
  pilha.push({ n, Orig, Temp, Dest });

  while (pilha.length > 0) {
      const { n, Orig, Temp, Dest } = pilha.pop();

      if (n === 1) {
          console.log(`Mova o disco 1 da haste ${Orig} para a haste ${Dest}`);
      } else {
          pilha.push({ n: n - 1, Orig: Temp, Temp: Orig, Dest });
          pilha.push({ n: 1, Orig, Temp, Dest });
          pilha.push({ n: n - 1, Orig, Temp: Dest, Dest: Orig });
      }
  }
}

torreDeHanoi(21, 'O', 'T', 'D');
