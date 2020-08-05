//Q1 HEllo World
function processData(inputString) {
    console.log("Hello, World.");
    console.log(inputString);
} 
processData('welcome home!')

//Q2 Data types

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    // Declare second integer, double, and String variables.
//function performOperation(ii, dd, ss) {
    
    // Read and save an integer, double, and String to your variables.
ii= parseInt(readLine())
dd = parseFloat(readLine())
ss = readLine()
    // Print the sum of both integer variables on a new line.
 console.log(i + ii)
    // Print the sum of the double variables on a new line.
console.log((d+ dd).toFixed(1))
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
console.log(s + ss)
}