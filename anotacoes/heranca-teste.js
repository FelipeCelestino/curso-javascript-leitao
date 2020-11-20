const carro ={


velocidadeAtual:0,
velocidadeMaxima:200,

acelerar(delta){

if(this.velocidadeAtual + delta <= this.velocidadeMaxima){
    this.velocidadeAtual += delta

}else{
    this.velocidadeAtual = this.velocidadeAtual
}


},

status(){

    return `${this.velocidadeAtual} KM/H ${this.velocidadeMaxima}`
}}


const ferrari={

modelo:'vermelho',
velocidadeMaxima:324


}
const volvo =  {

    modelo:'v40',
    velocidadeMaxima:200,
    status(){

        return`${this.modelo} ${super.status()}`
    }

}

Object.setPrototypeOf(ferrari , carro)
Object.setPrototypeOf(volvo, carro)



ferrari.acelerar(300)
console.log(ferrari.status())





