// class type

class Staff{
       private name:string;
         constructor(name:string)
         {
            this.name=name;
         }
         public getName():string
         {
                return this.name;
         }

}

const staff:Staff=new Staff("ambika");
console.log("(class type:)");
console.log(`staff name: ${staff.getName()}`);
