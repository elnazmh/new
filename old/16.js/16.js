//function a() {var b = 0;
    //for (var i = 0; i < arguments.length; i++) {
      //  b+=arguments[i]
    //}
    
 //   return b;
//}
//console.log(a(2,34,56))



//function c(...num) {var d = 0;
    //for (var i = 0; i < num.length; i++) {
      //  d+=num[i]
   // }
 //   return d
//}
//console.log(c(5,6,89))


//function a(num1,num2,num3=0,num4=0) {console.log(num1+num2+num3+num4)
    
//}
//a(2,3)
//a(2,34,5,6)

//function a() {console.log(arguments.length)
    
//}
//a(2,3)

function a() {var elnaz= 0;
    for (var i = 0; i < arguments.length; i++) {
        elnaz+=arguments[i]
        
    }
    return elnaz;
}
console.log(a(5,44,5,7,4,33,5,6,7,3,22,3,5,6))

function ab(...elnaz) {var omid =0;
    for (var i = 0; i < elnaz.length; i++) {
        omid+=elnaz[i]
        
    }
    return omid
}
console.log(ab(23,46,4,35,44,33,44))


var em = 17;
var ed =0;
for (var i = 1; i <= 17; i++) {
    if (em%i==0) {ed++
        
    }
    if (ed>2) {
        console.log('aval')

    }

}

