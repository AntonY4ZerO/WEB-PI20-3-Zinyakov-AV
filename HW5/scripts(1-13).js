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



console.log('задание 8')
let arr = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};
var arrayToList = function (arr) {
    var result = null;
    for (var i = arr.length-1; i >= 0; i--) {
        result = { 
            value: arr[i],
            rest:  result
        }
    }
    return result;
}

var listToArray = function (list) {
    var result = [];
    do { 
        result.push(list.value);
        list = list.rest;
    } while ( list !== null )
    return result;
};

var prepend = function (el, list) {
    return { 
        value: el,
        rest:  list
    }
}

var nth = function (list, ind) {
    if ( !list ) {
        return undefined;
    } else if ( ind === 0 ) {
            return list.value
    } else {
        return nth(list.rest, ind-1)
    }
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 0));

console.log('задание 9')
var deepEqual = function (x, y) {
    if (x === y) {
      return true;
    }
    else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
      if (Object.keys(x).length != Object.keys(y).length)
        return false;
  
      for (var prop in x) {
        if (y.hasOwnProperty(prop))
        {  
          if (! deepEqual(x[prop], y[prop]))
            return false;
        }
        else
          return false;
      }
      
      return true;
    }
    else 
      return false;
}
var obj = {here: {is: "kek", there: "lol"}, object: 1};
console.log(obj);
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: {is: "kekw", there: 'lol'}, object: 1}));
console.log(deepEqual(obj, {here: {is: "kek", there: 'lol'}, object: 1}));

console.log('задание 10')
var arrays = [[100, 221, 234], [775, 2356], [66666]];
arrays = arrays.reduce(function(a, b) {
    return a.concat(b);
});
console.log( arrays );

console.log('Задание 11');

let data = [
    {name: "Carolus Haverbeke", sex: "m", born: 1832, died: 1905, father: "Carel Haverbeke", mother: "Maria van Brussel"},
    {name: "Emma de Milliano",sex: "f",born: 1876,died: 1956,father: "Petrus de Milliano",mother: "Sophia van Damme"},
    {name: "Maria de Rycke",sex: "f",born: 1683,died: 1724,father: "Frederik de Rycke",mother: "Laurentia van Vlaenderen"},
    {name: "Jan van Brussel",sex: "m",born: 1714,died: 1748,father: "Jacobus van Brussel",mother: "Joanna van Rooten"},
    {name: "Philibert Haverbeke",sex: "m",born: 1907,died: 1997,father: "Emile Haverbeke",mother: "Emma de Milliano"},
    {name: "Jan Frans van Brussel",sex: "m",born: 1761,died: 1833,father: "Jacobus Bernardus van Brussel",mother: null},
    {name: "Pauwels van Haverbeke",sex: "m",born: 1535,died: 1582,father: "N. van Haverbeke",mother: null},
    {name: "Clara Aernoudts",sex: "f",born: 1918,died: 2012,father: "Henry Aernoudts",mother: "Sidonie Coene"},
    {name: "Emile Haverbeke",sex: "m",born: 1877,died: 1968,father: "Carolus Haverbeke",mother: "Maria Sturm"},
    {name: "Lieven de Causmaecker",sex: "m",born: 1696,died: 1724,father: "Carel de Causmaecker",mother: "Joanna Claes"},
    {name: "Pieter Haverbeke",sex: "m",born: 1602,died: 1642,father: "Lieven van Haverbeke",mother: null},
    {name: "Livina Haverbeke",sex: "f",born: 1692,died: 1743,father: "Daniel Haverbeke",mother: "Joanna de Pape"},
    {name: "Pieter Bernard Haverbeke",sex: "m",born: 1695,died: 1762,father: "Willem Haverbeke",mother: "Petronella Wauters"},
    {name: "Lieven van Haverbeke",sex: "m",born: 1570,died: 1636,father: "Pauwels van Haverbeke",mother: "Lievijne Jans"},
    {name: "Joanna de Causmaecker",sex: "f",born: 1762,died: 1807,father: "Bernardus de Causmaecker",mother: null},
    {name: "Willem Haverbeke",sex: "m",born: 1668,died: 1731,father: "Lieven Haverbeke",mother: "Elisabeth Hercke"},
    {name: "Pieter Antone Haverbeke",sex: "m",born: 1753,died: 1798,father: "Jan Francies Haverbeke",mother: "Petronella de Decker"},
    {name: "Maria van Brussel",sex: "f",born: 1801,died: 1834,father: "Jan Frans van Brussel",mother: "Joanna de Causmaecker"},
    {name: "Angela Haverbeke",sex: "f",born: 1728,died: 1734,father: "Pieter Bernard Haverbeke",mother: "Livina de Vrieze"},
    {name: "Elisabeth Haverbeke",sex: "f",born: 1711,died: 1754,father: "Jan Haverbeke",mother: "Maria de Rycke"},
    {name: "Lievijne Jans",sex: "f",born: 1542,died: 1582,father: null,mother: null},
    {name: "Bernardus de Causmaecker",sex: "m",born: 1721,died: 1789,father: "Lieven de Causmaecker",mother: "Livina Haverbeke"},
    {name: "Jacoba Lammens",sex: "f",born: 1699,died: 1740,father: "Lieven Lammens",mother: "Livina de Vrieze"},
    {name: "Pieter de Decker",sex: "m",born: 1705,died: 1780,father: "Joos de Decker",mother: "Petronella van de Steene"},
    {name: "Joanna de Pape",sex: "f",born: 1654,died: 1723,father: "Vincent de Pape",mother: "Petronella Wauters"},
    {name: "Daniel Haverbeke",sex: "m",born: 1652,died: 1723,father: "Lieven Haverbeke",mother: "Elisabeth Hercke"},
    {name: "Lieven Haverbeke",sex: "m",born: 1631,died: 1676,father: "Pieter Haverbeke",mother: "Anna van Hecke"},
    {name: "Martina de Pape",sex: "f",born: 1666,died: 1727,father: "Vincent de Pape",mother: "Petronella Wauters"},
    {name: "Jan Francies Haverbeke",sex: "m",born: 1725,died: 1779,father: "Pieter Bernard Haverbeke",mother: "Livina de Vrieze"},
    {name: "Maria Haverbeke",sex: "m",born: 1905,died: 1997,father: "Emile Haverbeke",mother: "Emma de Milliano"},
    {name: "Petronella de Decker",sex: "f",born: 1731,died: 1781,father: "Pieter de Decker",mother: "Livina Haverbeke"},
    {name: "Livina Sierens",sex: "f",born: 1761,died: 1826,father: "Jan Sierens",mother: "Maria van Waes"},
    {name: "Laurentia Haverbeke",sex: "f",born: 1710,died: 1786,father: "Jan Haverbeke",mother: "Maria de Rycke"},
    {name: "Carel Haverbeke",sex: "m",born: 1796,died: 1837,father: "Pieter Antone Haverbeke",mother: "Livina Sierens"},
    {name: "Elisabeth Hercke",sex: "f",born: 1632,died: 1674,father: "Willem Hercke",mother: "Margriet de Brabander"},
    {name: "Jan Haverbeke",sex: "m",born: 1671,died: 1731,father: "Lieven Haverbeke",mother: "Elisabeth Hercke"},
    {name: "Anna van Hecke",sex: "f",born: 1607,died: 1670,father: "Paschasius van Hecke",mother: "Martijntken Beelaert"},
    {name: "Maria Sturm",sex: "f",born: 1835,died: 1917,father: "Charles Sturm",mother: "Seraphina Spelier"},
    {name: "Jacobus Bernardus van Brussel",sex: "m",born: 1736,died: 1809,father: "Jan van Brussel",mother: "Elisabeth Haverbeke"}
  ];

function average(array) {
    function plus(a, b) {
        return a + b;
    }

    return array.reduce(plus) / array.length;
}

var byName = {};

data.forEach(function (person) {
    byName[person.name] = person;
});

var differences = data.filter(function (person) {
    return byName[person.mother] != null;
}).map(function (person) {
    return person.born - byName[person.mother].born;
});
console.log("Средний возраст:");
console.log(average(differences));


console.log('Задание 12');

function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

var byCenturies = {}

function groupBy(arr, func){ 
    var groupObj = {};
    arr.forEach(function(p){
        var id = func(p);
        if ( groupObj[id] === undefined ) {
            groupObj[id] = [];
        }
        groupObj[id].push( p )
    });
    return groupObj;
}

function getCentury(p) {
    return Math.ceil(p.died / 100);
}

var byCenturies = groupBy( data, getCentury );

for ( century in byCenturies ) {
    byCenturies[century] = average( byCenturies[century].map(function(p){ return p.died - p.born }) );
    console.log( century + ": " + byCenturies[century] );
}

console.log('задание 13')
function every(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        if ( !func(arr[i]) ) {
            return false
        }
    }
    return true;
};

function some(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        if ( func(arr[i]) ) {
            return true
        }
    }
    return false;
};


console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));