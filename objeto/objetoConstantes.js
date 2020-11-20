//pessoas -> 123 ->


const pessoa ={  nome:'joao'}
pessoa.nome='Felipe'


console.log(pessoa)

pessoa.nome='Ana'
console.log(pessoa)
// Object.freezer serve para congelar o objeto impossibilitando a modificação



Object.freeze(pessoa)
pessoa.nome ='Maria'
console.log(pessoa)