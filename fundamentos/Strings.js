const escola = "Cod3"
console.log(escola.charAt(3))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))
// do primeiro ate o terceiro menos o terceiro
console.log(escola.substring(0,3))


console.log('escola '.concat(escola).concat("!"))
//substutuir um caracter
console.log(escola.replace(3, 'e'))
// array
console.log('Ana , maria, pedro'.split(','))