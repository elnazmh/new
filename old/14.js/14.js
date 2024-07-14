//var a = [12,34,[23,56],57];
//console.log(a[2][0]);

//function a(ali,hasan) {return(ali / hasan);


//}
//var b =a(12,4);
//console.log(b)





//var ab = function (em,ed) {console.log(em * ed);


//}

//var e = ab(12,5);
//console.log(e)

//var mid = function (num1, num2, num3, num4, num5) {

// var sum = num1 + num2 + num3 + num4 + num5;
// var avrage = sum / 5;

//if (avrage >= 11) {
///return ('ghabol')


// } else {
// return ('rad')


//}

//}
//var a = mid(12, 12.5, 16, 18, 8);
//var b = mid(12, 12.5, 16, 7, 8);
//var c = mid(12, 12.5, 1, 18, 8);

//console.log(a, b, c);



//function cross(a,b) {
//   return (a * b)

//}
//var a =cross(4,5);
/////console.log(a)

//function sub(c,d) {return(c-d)

//}
//var b = sub(23,4);
///console.log(b)

//function peo(e,f) {return(e**f)

//}
//var c = peo(2,3);
//console.log(c);

//function max(num) {
//var sm = 0;
//for (var i = 0; i < num.length; i++) {
// if (num[i] > sm) {
//   sm = num[i];
// }

// }
// return (sm);
//}

//var ab = [12, 34, 56, 86, 43, 45];
//var ac = (max(ab));
//console.log(ac);





//function min(c, d) {
//  return (c <= d)

//}


//function avrage(num1, num2, num3, num4) {
// return (num1 + num2 + num3 + num4 / 4
// )
//}
//console.log(avrage(10, 23, 45, 23));

//console.log("elnaz'mh'")
//var a = 'elnaz';
//console.log(a.length);
//console.log(a!==b);
///var a = 25;
//if (a<=10) {console.log('kodak');


//}
//else if(a<=20){console.log('n0ojavan');

//}
//else if(a<= 30){console.log('javan');
//}

//var age = 18;
//if (5 < age < 10) {
//   console.log('kodak');
///}
//else if (11 < age < 21) {
//console.log('no javan');

//}
//else if (22 < age < 31) {console.log('javan'); }
//else if (32 < age < 40) {console.log('miyansal'); };



//var ab = 14;
//console.log(ab < 20 && ab > 11)
//switch (ab) {
// case ab < 10 && ab > 5:
// console.log('kodak')


//  break;

// case ab < 20 && ab > 11:
//  console.log('no javan')
//  break;
//  case ab < 30 && ab > 21:
//  console.log('javan')
///  break;
//  case ab < 40 && ab > 31:
//   console.log('miyansal')
///
//    break;
// default:



//break;
//}

//var age = 12;

//if (age < 10) {
// console.log('kodak')
//} 
//else if (age < 20) {
//  console.log('nojavan')
//}
//else if (age < 30) {
// console.log('javan')
//}
//var sen =12;
//switch (sen) {
// case 1:console.log('rad') 

// break;
// case 2:console.log('ghabol') 

//break;
//case 3:console.log('nimerad') 

//  break;
//default:
//  break;
//}

var lang = "english";
var day = 3;
if (lang == "persisch") {
    switch (day) {
        case 1: console.log('shanbe')

            break;
        case 2: console.log('1shanbe')

            break;
        case 3: console.log('2shanbe')

            break;
        case 4: console.log('3shanbe')

            break;
        case 5: console.log('4shanbe')

            break;
        case 6: console.log('5shanbe')

            break;
        case 7: console.log('jome')

            break;

        default:
            break;
    }

}
else if (lang == "english") {
    switch (day) {
        case 1: console.log('Satarday')

            break;
        case 2: console.log('Sunday')

            break;
        case 3: console.log('Monday')

            break;
        case 4: console.log('3shanbe')

            break;
        case 5: console.log('4shanbe')

            break;
        case 6: console.log('5shanbe')

            break;
        case 7: console.log('jome')

            break;

        default:
            break;
    }
}
//function a(num1,num2,num3) {console.log(num1+num2+num3)

//}

//a(1,4,5);
//a(1,2)
//a(2,34,5,6)
//function a() {console.log(arguments.length)

//}
//a(56,9,89)
//function a() {
 //   var b = 0;
 //   for (var i = 0; i < arguments.length; i++) {
       // b += arguments[i]

    //}
    //return b;
//}
//console.log(a(5))
//console.log(a(5, 34, 56))

function a() {var b = 0;
    for (var i = 0; i < arguments.length; i++) {
    b+=arguments[i]
    
}
 return b   
}
console.log(a(34,76,98))



function elnaz() {
    var num =0;
    for (var i = 0; i < arguments.length; i++) {
    num+=arguments[i]
    
}
 return num;   
}

console.log(elnaz(56,54))

function omid(...hi) {console.log(hi)
    
}
omid(6)