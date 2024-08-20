"use strict";
//interface (seperate type and use it in code) used only in object
var employees = {
    name: "ambika",
    age: 34,
    isMajor: true
};
console.log("(interface) Employees:", employees);
let empName = "ambika";
let empAge = 35;
let doorNo = 12;
let empStreet = "kamarajar street";
let empCity = "chennai";
let empAddress = {
    no: doorNo,
    street: empStreet,
    city: empCity
};
console.log("(type alias) Employee Name:", empName);
console.log(" Employee Age:", empAge);
console.log(" Employee Address:", empAddress);
