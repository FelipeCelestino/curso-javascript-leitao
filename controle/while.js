function getInteiro(min,max){
  let valor = Math.random()  * (max - min) + min
  return Math.floor(valor)

}
let opcao = 0
while(opcao != 8){

    opcao = getInteiro(8 , 10)
    console.log('opcao escolinda foi' + opcao)



}
console.log('até a proxima')
