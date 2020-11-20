const pessoa = {
    nome:'ana',
    idade:5,
    endereco:{

        logradouro:'Rua ABC',
        Numero : 1000

         }



}

const { nome ,idade  } = pessoa
console.log(nome ,idade) 

const {sobrenome ='sim' ,bemHGumorada = 'nao'} =pessoa
console.log(sobrenome,bemHGumorada)

const { endereco:{ logradouro ,Numero ,cep ='cep vazio'}} =pessoa
console.log( logradouro,Numero,cep)

