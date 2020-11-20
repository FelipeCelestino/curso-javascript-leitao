function criarProduto(nome, preco){


        return{

            nome,
            preco,
            desconto: (preco - 100)
            

        }

 }


 console.log(criarProduto('Notbook', 2199))
 console.log(criarProduto('meia', 2000))