"use strict";
// Inline Type Annotation is used to give the types in same line
function greet(person) {
    console.log("(Inline Type Annotation: )");
    console.log(`Hello ${person.name},you are ${person.age} years old.`);
}
greet({ name: "ambika", age: 34 });
