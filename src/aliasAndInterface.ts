//interface (seperate type and use it in code) used only in object

interface Employee {name:string;                     
    age:number;
    isMajor:boolean
    }

var employees:Employee = {               //object
                name:"ambika",      
                age:34,               
                isMajor:true
            }  

console.log("(interface) Employees:",employees);

// type alias is used for string,number,objects and arrays.

type EmpName=string;            //string
type EmpAge=number;             //number
type DoorNo=number;
type EmpStreet=string;
type EmpCity=string;
type EmpAddress={               //object
    no:DoorNo;
    street:EmpStreet;
    city:EmpCity;
}

let empName:EmpName="ambika";
let empAge:EmpAge=35;
let doorNo:DoorNo=12;
let empStreet:EmpStreet="kamarajar street";
let empCity:EmpCity="chennai";

let empAddress:EmpAddress={
    no:doorNo,
    street:empStreet,
    city:empCity
}

console.log("(type alias) Employee Name:",empName);
console.log(" Employee Age:",empAge);
console.log(" Employee Address:",empAddress);


