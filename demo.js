var num1 = Number(prompt("Enter Number 1:"));
var num2 = Number(prompt("Enter Number 2:"));
var num3 = Number(prompt("Enter Number 3:"));

function MOTHER(addFunc, multiplyFunc, divideFunc) {
    return [
        addFunc(),        
        multiplyFunc(),   
        divideFunc()      
    ];
}

var result = MOTHER(
    function () {
        sum= num1 + num2 + num3; 
        return sum;
    },
    function () {
        result= num1 * num2 * num3; 
        return result;
    },
    function () {
        res= num1 / num2 / num3; 
        return res;
    }
);

document.writeln("The sum of 3 values: " + result[0] + "<br>");
document.writeln("The product of 3 values: " + result[1] + "<br>");
document.writeln("The division of 3 values: " + result[2] + "<br>");
