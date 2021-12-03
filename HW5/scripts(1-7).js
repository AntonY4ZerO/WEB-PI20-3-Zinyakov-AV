console.log('задание 1')
var str = '#'
for (var i = 0; i < 7; i++) {
    console.log(str);
    str += '#';
}

console.log('задание 2')
for (var i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('fizzbuzz');
    } else if (i % 3 == 0) {
        console.log('fizz');
    } else if (i % 5 == 0) {
        console.log('buzz');
    } else {
        console.log(i);  
    }      
}

console.log('задание 3')
var str=""
for (var i = 1; i < 8*8; i++) {
    if (i >8 && i % 9 == 0) {
        str+='\n'
    } else if (i % 2 == 1) {
        str+='#'
    } else if (i % 2 == 0) {
        str+=' '
    }
}
console.log(str)

console.log('задание 4')
function min(a, b) {
    if (a < b) {
        console.log(`Минимальный элемент ${a}`);
    } else if (b < a) {
        console.log(`Минимальный элемент ${b}`);
    }
  }
min(3,4)
min(9,2)

console.log('задание 5')
function countBs(strin) {
    let count=0;
    for (i=0; i<strin.length; i++) {
        if (strin[i]=='В') {
           count++; 
        } 
    }
    console.log(`Всего русских букв В = ${count}`)
}

function countChar(strin, strinsearch) {
    let count=0;
    for (i=0; i<=strin.length; i++) {
        if (strin[i]==strinsearch) {
           count++; 
        } 
    }
    console.log(`Всего русских букв ${strinsearch} = ${count}`)
}
countBs('ВПриВет человек хау ар ю аввававаВ')
countChar('ПриВет человек хау ар ю аввавава', 'а')



console.log('задание 6')
function range(one,two) {
    let arr1=[];
    for (i=one; i<=two; i++) {
        arr1.push(i);
    }
    console.log(arr1)
}
let aaa = range(2,10)

function sum(arr) {
    res = 0;
    for (i in arr) {
        res += Number(i);
    }
    console.log(`Сумма равна ${res}`);
}
sum([2,3,4,5,6,7]);

function range1(one,two, step=1) {
    let arr1=[];
    console.log(`Шаг равен ${step}`)
    if (Number(step) < 0) {
        for (i=one; i>=two; i+=step) {
            arr1.push(i);
        }
    } else if (Number(step > 0)) {
        for (i=one; i<=two; i+=step) {
            arr1.push(i);
        }
    }
    console.log(arr1)
}
range1(2,10,2)
range1(10,2,-3)

console.log('задание 7')
function reverseArray(arra){
    arr1 = [];
    for (let i = arra.length - 1; i >= 0; i--) {
        arr1.push(arra[i]);
    }
    console.log(arr1);
}
reverseArray([1,2,3,4,5,6,7])

function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
    }
    console.log(arr);
}
reverseArrayInPlace([1,2,3,4])  
