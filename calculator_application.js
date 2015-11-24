var number1 = document.getElementById('a');
var number2 = document.getElementById('b');
var operand = document.getElementById('operand')

var form = document.getElementById('input');
form.addEventListener("submit", function(e){
e.preventDefault();
var a = parseInt(number1.value)
var b = parseInt(number2.value)
switch(operand.value){
case"add":
document.getElementById("answer").innerHTML = (a+b);
break;
case"subtract":
document.getElementById("answer").innerHTML = (a-b);
break;
case"multiply":
document.getElementById("answer").innerHTML = (a*b);
break;
case"divide":
document.getElementById("answer").innerHTML = (a/b);
break;
default:
console.log('am I working?')
}
});