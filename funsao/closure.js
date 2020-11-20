//closure é o escopo criado quando uma funsão é declarada
// esse escopo permite a funsao acessar a manupular variveis externas a função

//contexto lexico em ação 



const x = 'Global'



function fora (){
    const x = 'Local' 

        function dentro(){
            return  x


        } 
        return dentro
    
    }

    const minhaFunsao = fora()
    console.log(minhaFunsao())




