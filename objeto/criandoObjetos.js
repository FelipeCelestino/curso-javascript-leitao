//usando a notaão literal

const obj1 = {}

console.log(obj1)

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// funções contrutoras


function produto (nome,preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = ()=>{
        return preco * (1 -desc )
    }
}



const p1 = new produto('caneta', 7.99, 0.15)
const p2 = new produto('Notebook', 2998.99, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())




// funsaõ factory

function criarFuncionario(nome, salario,faltas){

return{
    nome,
    salario,
    faltas,
    getSalario(){
        return(salario /30) * (30 - faltas)


    }
  }

}


const f1  = new criarFuncionario ('Felipe',3000, 1)
const f2 = new criarFuncionario  ('Daniele', 6000, 1)
console.log(f1.getSalario(), f2.getSalario())


const filha  = Object.create(null)
filha.nome='Ana'
console.log(filha)