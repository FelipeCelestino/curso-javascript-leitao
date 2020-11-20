const notas = [ 1.5 ,2.8 ,3.4 ,4 ,5 ,6 ,7 ,8 ,9, 10]

let notasBaixas1 = []

for (i in notas){

if(notas[i] < 7){

    notasBaixas1.push(notas[i])

}

}
console.log(notasBaixas1)



notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})
console.log(notasBaixas2)