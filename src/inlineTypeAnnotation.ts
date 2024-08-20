// Inline Type Annotation is used to give the types in same line

function greet(person:{name:String;age:number}):void{                  //returns nothing.so we use void
    console.log("(Inline Type Annotation: )");                    
    console.log(`Hello ${person.name},you are ${person.age} years old.`)
}

greet({name:"ambika",age:34});
