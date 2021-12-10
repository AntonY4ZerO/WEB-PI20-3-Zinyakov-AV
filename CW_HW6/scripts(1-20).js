console.log('Задание 1');

let city1 = {};
city1.name = "ГородN";
city1.population = "10 millions";
console.log('Название: ' + city1.name + ', Население: ' + city1.population);


console.log('Задание 2');

let city2 = {name: "ГородM", population: '1e6'};
console.log('Название: ' + city2.name + ', Население: ' + city2.population);

console.log('Задание 3'); 

function getName() {
    return this.name;
}

city1.getName = getName;
city2.getName = getName;

console.log(city1.getName());
console.log(city2.getName());

console.log('Задание 4'); 

function exportStr() {
    return `name=${this.name}\npopulation=${this.population}\n`; 
}
city1.exportStr = exportStr;
city2.exportStr = exportStr;

console.log(city1.exportStr());
console.log(city2.exportStr());

console.log('Задание 5'); 

function getObj () { return this }
 
city1.getCity = getObj;
city2.getCity = getObj;

console.log('Название: ' + city1.getCity().name + ', Население: ' + city1.getCity().population);
console.log('Название: ' + city2.getCity().name + ', Население: ' + city2.getCity().population);

console.log('Задание 6');
let obj = {}

obj.method1 = function() {
    return this
}
obj.method2 = function() {
    return this
}
obj.method3 = function() {
    return "метод 3"
}
console.log(obj.method1().method2().method3())

console.log('Задание 7');
let d1=[45,78,10,3];
d1[7]=100;
console.log(d1);
console.log(d1[6], d1[7]);

console.log('Задание 8');
let sum2 = 0;
let d2=[45,78,10,3];
for (let i = 0; i < d2.length; i++) {
    sum2 += d2[i];
}
console.log(sum2);

console.log('Задание 9');
let sum3 = 0;
let d3=[45,78,10,3];
d3[7]=100;
for (let obj in d3) {
       sum3 += d3[obj]; 
}
console.log(sum3);

console.log('Задание 10');
let d4 =[45,78,10,3];
function my(a,b){
    if (a>b) {
        return -1
    }
    if (a<b) {
        return 1
    }
    return 0
}
d4.sort(my);
console.log(d4);

console.log('Задание 11');
let d5 =[]
for (i = 0; i < 3; i++) {
    d5[i] = [];
    for (k = 0; k < 4; k++){
        d5[i][k]= 5;
    }
}
console.log(d5);

console.log('Задание 12');
function Vector(x, y) {
    this.x = x;
    this.y = y;
}
Vector.prototype.plus = function plus(otherVector) {
    var x = this.x + otherVector.x;
    var y = this.y + otherVector.y;
    return new Vector(x, y);
};
Vector.prototype.minus = function minus(otherVector) {
    var x = this.x - otherVector.x;
    var y = this.y - otherVector.y;
    return new Vector(x, y);
};
Vector.prototype.lengthh = function lengthh() {
    return Math.sqrt(this.x*this.x+this.y*this.y)
}
// Ваш код
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// - Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// - Vector{x: -1, y: -1}
console.log(new Vector(3, 4).lengthh());

console.log('Задание 13');
function StretchCell(inner, width, height) {
	this.inner = inner;
	this.width = width;
	this.height = height;
}

function repeat(string, times) {
	let result = "";
	for (let i = 0; i < times; ++i)
		result += string;
	return result;
}

function TextCell(text) {
	this.text = text.split("\n");
}

TextCell.prototype.minWidth = function() {
	return this.text.reduce(function(width, line) { return Math.max(width, line.length); }, 0);
};
TextCell.prototype.minHeight = function() {
	return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
	let result = [];

	for (let i = 0; i < height; ++i) {
		let line = this.text[i] || "";
		result.push(line + repeat(" ", width - line.length));
	}
	return result;
};


StretchCell.prototype.minWidth = function() {
	return Math.max(this.width, this.inner.minWidth());
};
StretchCell.prototype.minHeight = function() {
	return Math.max(this.height, this.inner.minHeight());
};
StretchCell.prototype.draw = function(width, height) {
	return this.inner.draw(width, height);
}

let sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(3, 2));

console.log('Задание 14');

function logFive (next){
    len=next.length;
    if (len>5){
        len =5;
    }
    for (var i = 0; i < len; i++) {
        console.log(next[i]);
    }
}

function ArSeq(arr){
    self.mass=[];
    for (let i in arr){
        self.mass.push(arr[i]);
        }
    return(self.mass)

}
function RangeSeq(from, to){
    this.from = from;
    this.to = to;
    self.mass=[];
    for (var i = from; i < to; i++){
        self.mass.push(i);
    }
    return(self.mass)

}

// Ваш код.
logFive(new ArSeq([1, 2]));
// - 1
// - 2
logFive(new RangeSeq(100, 1000));
// - 100
// - 101
// - 102
// - 103
// - 104

console.log('Задание 15'); 


function Card(from, to) {
    this.from = from;
    this.to = to;
    this.show = function(){
        console.log(this.from +" "+ this.to);
    };
}

let c1 = ["Москва", "Екатеренбург"]
var c = new Card(c1[0], c1[1]);
c.show();

console.log('Задание 16');

class Human{
    constructor(name, age, height){
    this.name = name,
    this.age = age,
    this.height = height
    }
    getInfo() {
    return `${this.name}, ${this.age}, ${this.height}`;
    }
    get firstname() {
        return `${this.name}`;
        }
}    
let humans = [
    new Human("Коля", 23, 180),
    new Human("Даша", 19, 170),
    new Human("Ваня", 18, 192),
    new Human("Петя", 45, 178),
    new Human("Вася", 34, 197),
    new Human("Джони", 40, 168),
    new Human("Катя", 37, 160),
    new Human("Петя", 29, 200),
    new Human("Соня", 21, 172),
    new Human("Женя", 25, 175)
    ];

for (let human of humans)
    console.log(human.getInfo());


console.log('Задание 17');

function sortByName(arr) {
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}


var users = [["Ольга",168], ["Артем",170], ["Алевтина",160]]

function sortByHeight(arr) {
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j][1] < arr[j + 1][1]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}

console.log(sortByHeight(users))

console.log('Задание 18');

var dt1 = new Date(2045, 0, 1, 00, 00); 
console.log(dt1);

console.log('Задание 19');

var dt2= parseInt(+new Date()/1000);
console.log(dt2);


console.log('Задание 20');

function getDays(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth-1, 32).getDate();
}

console.log(getDays(2,2021))