"use strict";
// import { Employee } from "./Employee.type";
var age = 45; //number 
// ages="ambika";                   //throws error
var names = "ambika"; //string
// names=899;                               //throws error
names = "preethi"; //accepted
var fruits = [2, { name: "ambika" }, "apple"]; //array  all datatype
var veggies = ["carrot", "beetroot"]; //array only string
var numbers = [2, 3, 4]; //array only numbers
var employee = {
    name: "ambika",
    age: 34
};
// readonly prevents the array being changed
var color = ["red", "blue"];
// color.pop();                                     //throws error pop doesn't exists in readonly
var colors = ["red", "blue"];
colors.pop();
// tuples:   (it is typed array.we must give the types of each element)
var arr = [false, 78, "ambika"]; //if we give wrong no of values it throws error
arr.pop();
// readonly: (prevents the tuples from being changed)
var arr1 = [false, 78, "ambika"];
// arr1.pop();   //throws error
console.log("(number) Age:", age);
console.log("(string) Name:", names);
console.log("(Any array) fruits:", fruits);
console.log("(string array) veggies:", veggies);
console.log("(number array) Numbers:", numbers);
console.log("Employee:", employee);
console.log("colors:", colors);
console.log("(tuple) array:", arr);
