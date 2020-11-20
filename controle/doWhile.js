
  let opcao = -1
 
  do{
      opcao = getInteiro(-2 , 10)
      console.log('opcao escolinda foi' + opcao)
  
  
  
  } while(opcao != 8)
  console.log('até a proxima')
  

  function getInteiro(min,max){
    let valor = Math.random()  * (max - min) + min
    return Math.floor(valor)
  
  }