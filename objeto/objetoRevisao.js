const produto = new Object

produto.nome ='cadeira'
produto['marca do produto'] = 'Generico'
produto.preco = 220

console.log(produto)


delete produto.preco
delete produto['marca do produto']
console.log(produto)


const carro ={

modelo:'A4',
valor: 89000, 
proprietario:{
    
    
    nome:'Felipe',
    idade: 50,
    endereco:{

        logradouro:'rua ABC',
        numero: 123,
    }},
    condutores: [{
        nome:'ana',
        idade:42,
    },{

        nome:'ana',
        idade:30,
    }],


        calculandoSeguro:function(){
                //...

        }
}


carro.proprietario.endereco.numero = 1000
carro.proprietario.endereco.logradouro = 'Av Gigante'

console.log(carro)


delete carro.condutores
delete carro.proprietario
delete carro.calculandoSeguro
console.log(carro)