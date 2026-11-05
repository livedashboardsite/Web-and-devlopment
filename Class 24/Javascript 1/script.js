// Grade System 
// 1. Get the input from the user
// 2. Check the condition
// 3. Return the result

let marks = Number(prompt("Enter the marks: "));
let a = 70;
if (isNaN(marks) || marks < 0 || marks > 100) {
    alert("Enter valid marks");
}
else if (marks >= a) {
    console.log("A");
}
else if (marks >= 60) {
    console.log("B");
}
else if (marks >= 50) {
    console.log("C");
}
else if (marks >= 40) {
    console.log("D");
}
else {
    console.log("Fail");
}
