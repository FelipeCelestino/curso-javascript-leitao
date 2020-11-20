const resultado = function (nota){

    switch (Math.floor(nota)){

        case 3 :
            console.log('caso 3')
            break
        case 4: 
        console.log('caso4 ')
        break
 
        default :
        console.log('Nota invalida')
    }

    console.log('Fim')
}

resultado(30)