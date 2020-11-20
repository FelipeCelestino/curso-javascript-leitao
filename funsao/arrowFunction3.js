let comparaComThis = function (pam){
        console.log(this === pam)
        }
        
        const obj = {}
        comparaComThis(global) 
        comparaComThis = comparaComThis.bind(obj)       
        comparaComThis(global)
        comparaComThis(obj)


