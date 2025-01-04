// How would you define a function that takes two numbers as parameters and returns their sum?
function sumOfTwoNumbers(a,b){
return a+b;
}
console.log(sumOfTwoNumbers(20,30));

// If you define a function that accepts a string as a parameter, how would you modify it to print the string in uppercase?
function uppercase(a){
console.log(a.toUpperCase());
}
uppercase("hello world");

// In JavaScript, what happens if you pass an undefined value as an argument to a function that expects a parameter?
function hello(hloooo){
    console.log(hloooo);
}
hello();

// Suppose you have a function that takes an array as a parameter. How would you check inside the function if the array is empty?




// write a function that takes two numbers as parameters and returns their difference.
function differenceOfTwoNumbers(a,b){
    return a-b;
}
console.log(differenceOfTwoNumbers(30,20))

// Define a function that accepts a name and age as parameters, and returns a string with a greeting like "Hello, [name]! You are [age] years old."
function greeting(name,age){
    return`Hello, ${name}! you are ${age} years old`;
}
console.log(greeting("Aadhya",21));

// Write a function that takes a number as a parameter and returns true if the number is a even number, otherwise false.
function even(a){
    if(a%2==0){
        console.log("even")
    }
    else{
        console.log("false")
    }
}
even(120);

