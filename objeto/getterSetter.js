const sequencia ={

    _valor:1, // convensão
    get valor(){ return this._valor++},

    set valor(valor){
        if(valor > this._valor){
            valor =  this._valor  
    
      } 
    }
}

console.log(sequencia.valor,sequencia.valor)