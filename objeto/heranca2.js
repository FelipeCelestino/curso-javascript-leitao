// cadeia de protptipo

//Object.prototype.attr0 ='0'
//const avo = {attr1: 'A'}
//const pai = {__proto__:avo, attr2:'B',attr3:3}
//const filho = { __proto__:pai,attr3: 'C'}
//console.log(filho.attr0,filho.attr1, filho.attr2, filho.attr3)




const carro  = {

velAtual:0,
velMax:200,
acelerMais(delta){
                
                if(this.velAtual + delta <= this.velMax){
                this.velAtual += delta
            }else{

                this.velAtual = velAtual

            }

      },
      status (){

return `${this.velAtual}KM/H de ${this.velMax} KM/h`

      }

    }

        const ferrari={

modelo:'f40',
velMax:324

        }
const volvo= {

modelo:'v40',
velMax: 200,
status(){

    return `${this.modelo}:${super.status()}`
}

}


    Object.setPrototypeOf(ferrari, carro)
    Object.setPrototypeOf(volvo ,carro)

    ferrari.acelerMais(30)
    console.log(ferrari.status())
 
    
    
    volvo.acelerMais(100)
    console.log(volvo.status())