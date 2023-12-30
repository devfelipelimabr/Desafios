function mover(n, Orig, Temp, Dest) {
  if (n === 1) {
    console.log(`Mova o disco 1 da haste ${Orig} para a haste ${Dest}`);
  } else {
    mover(n - 1, Orig, Dest, Temp);
    console.log(`Mova o disco ${n} da haste ${Orig} para a haste ${Dest}`);
    mover(n - 1, Temp, Orig, Dest);
  }
}

function main() {
  mover(21, "O", "T", "D");
}

main();
