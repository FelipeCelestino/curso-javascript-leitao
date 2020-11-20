const saudacao = 'opa' // contexto lexico 1

function exec(){

    const saudacao ='falaa' // contexto lexico
    return saudacao

}
//objetos saõ grupos alinhados de pares nome/valor

const cliente = {

    nome:'Felipe',
    idade:32,
    peso:90,
    endereço:{

        logradouro:'Rua Muito Legal',
        numero:123
    }
}


 

console.log(saudacao)
console.log(exec())
console.log(cliente)