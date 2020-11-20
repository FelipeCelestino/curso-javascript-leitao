

function fun1 (a) {}


// armazenas em variavel
const func2 = function (){}

// armazenar em u array
const array = [function (a ,b ) {return a + b}, fun1 , func2 ]
    
console.log(array[0](2,3))


//armazenar em um atricuto  de objeto


const obj = {}

obj.falar =function (){return 'Opa'}

console.log(obj.falar())

//pasar uma funsao como pareamentro para um  outra funsao


function rum (fun){
fun()

}

rum (function(){console.log('Execultando...')})

// uma função elapode retornar / conter uma funsão


function soma(a , b){

    return function(c){
        console.log(a + b + c)
    }
}


soma(2 , 3)(4)