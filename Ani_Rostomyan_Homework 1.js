
let a = 81;
let b = 16;
console.log(a + b, a - b, a * b, a / b, a % b)


let name = prompt("Please write your name");
let age = prompt("Please write your age");
console.log(`My name is ${name}, I am ${age}.`)


let num = 59;
const lastDigit = num % 10;
if(lastDigit % 2){
    console.log ('Yes');
}else{
    console.log('No');
}


let num = +prompt('Please enter a number');
if (num < 0){
    console.log('Yes')
}else{
    console.log('No')
}




let num1 = 3;
let num2 = 49;
if(num1 % num2 && num2 % num1) {
    console.log(0)
}else{
    console.log(1)
}


let month = +prompt("Please enter your favorite month's number");
switch(month){
    case 1: console.log("January");
            break;
    case 2: console.log("February");
            break;
    case 3: console.log("March");
            break;
    case 4: console.log("April");
            break;
    case 5: console.log("May");
            break;
    case 6: console.log("June");
            break;
    case 7: console.log("July");
            break;
    case 8: console.log("August");
            break;
    case 9: console.log("September");
            break;
    case 10:console.log("October");
            break;
    case 11:console.log("November");
            break;
    case 12:console.log("December");
            break;
    default: alert("Unfortunately no month is found!!!");
}



let a = +prompt("Number 1");
let b = +prompt("Number 2");
let c = +prompt("Number 3");
if (a >= b & a >= c){
    console.log(`${a} is maximum.`)
}else if(b >= a && b >= c){
    console.log(`${b} is maximum.`)
}else if(c >= a && c >= a){
    console.log(`${c} is maximum.`)
}
