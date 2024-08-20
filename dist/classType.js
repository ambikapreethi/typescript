"use strict";
// class type
class Staff {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const staff = new Staff("ambika");
console.log("(class type:)");
console.log(`staff name: ${staff.getName()}`);
