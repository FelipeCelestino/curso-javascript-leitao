const pai = {
nome:'Felipe',
corCabelo:'preto'

}


const filha = Object.create(pai)

filha.nome ='Dany'
console.log(filha.corCabelo)
console.log(`${filha.nome} ${filha.corCabelo}`)


  const filha2= Object.create(pai)
      filha.nome='bia'

  console.log(filha2.nome)
  console.log(filha2.corCabelo)
  console.log(`${filha2.nome} tem a cor do cabelo ${filha2.corCabelo}`)

  console.log(Object.keys(filha))
  console.log(Object.keys(filha2))

  for ( let key in filha2){

    filha2.hasOwnProperty(key) ? 
        console.log(key) :console.log(`Por herença ${key}`)

  }