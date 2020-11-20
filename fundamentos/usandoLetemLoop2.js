const funsc =[]

for( let i = 0; i < 10;i++){

    funsc.push(function(){

console.log(i)

    })


}
funsc[2]()
funsc[8]()