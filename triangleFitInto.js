function TriangleFitInto(arr1, arr2){
if(arr1.length !== 3 || arr2.length !== 3){
    throw new Error("Não foram passadas todas as medidas.")
}

let isTriangle1 = false
let isTriangle2 = false

let sizeTriangle1 = 0;
let sizeTriangle2 = 0;

if(arr1[0]+arr1[1]>arr1[2] && arr1[1]+arr1[2]>arr1[0] && arr1[2]+arr1[0]>arr1[1]){
    isTriangle1 = true
}

if(arr2[0]+arr2[1]>arr2[2] && arr2[1]+arr2[2]>arr2[0] && arr2[2]+arr2[0]>arr2[1]){
    isTriangle2 = true
}

if(isTriangle1 && isTriangle2){
    for(let i = 0; i<3; i++){
        if(typeof arr1[i] !== 'number' || typeof arr2[i] !== 'number'){
            throw new Error ("Foram passados valores não numéricos")
        }else{
            sizeTriangle1 += arr1[i]
            sizeTriangle2 += arr2[i]
        }
    }
}else{
    throw new Error ("Há não triângulo(s)")
}

return sizeTriangle1 <= sizeTriangle2

}

module.exports = TriangleFitInto