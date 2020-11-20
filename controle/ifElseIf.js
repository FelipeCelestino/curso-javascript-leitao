Number.prototype.entre = function(inicio ,fim){
    return this>=inicio && this<= fim

}
const imprimirResultado =function (nota){
    
    if(nota.entre(9,10)){

        console.log('Quadro de hora')


    } else if (nota.entre(7,8.99)){
        console.log('Aprovado')



    } else if(nota.entre(4,6)){
        console.log('Mediano')
    }
    else if (nota.entre(1,3)){

console.log('Reprovado')

    }
console.log('...')
}



    imprimirResultado(10)
    imprimirResultado (7)
    imprimirResultado (6)
    imprimirResultado (3)