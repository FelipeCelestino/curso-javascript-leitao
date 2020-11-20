let valor // não inicializada 
console.log(valor)

valor = null //ausencia de valor
console.log(valor)

//console.log(valor.toString()) // erro"

const produto ={}
 console.log(produto.preco)
 console.log(produto)
 produto.preco = 400
 console.log(produto.preco)

 produto.preco = undefined // evite atribuir underfined
 console.log(produto.preco)
 console.log(produto)


 produto.preco =null
 console.log(!!produto.preco)
 console.log(produto)