function FibonacciSequence(qty){
    if(typeof qty !== "number" || qty < 1 || qty > 2**26){
        throw new Error("Número inserido inválido.")
    }
       
    let sequence = [0,1]
    

    for(let i = 0; i < qty-2; i++){
        sequence.push(sequence[i] + sequence[i+1])
    }

    return sequence
}

module.exports = FibonacciSequence