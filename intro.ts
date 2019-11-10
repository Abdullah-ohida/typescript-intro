// introduction to type script
function greeting(name: string) {
    return "Hello" + name;
}

let person ="Josiah";

greeting(person);

class Student {
    fullName : string;
    constructor(firstName: string, middleInitial: string, LastName: string  )
{
    this.fullName = firstName + "" + middleInitial + "" + LastName;
}

 Promote(student: Student ) {
    ///code here
    return true;
}
}

///abdullah comment let do it together.

let student1 = new Student("Josiah", "Ayoola", "Isong")
console.log (student1)
console.log(typeof(student1));


function add (a,x : number) :boolean {
    let sum = a + x ;
    return sum
}
let magic = add(1,2)
console.log(magic)
console.log(typeof(magic));

class Vehicle {
    color : string;
    type : string;
    make : string;
    engine_number : number

    constructor(color: string, type:string, make:string, engine_number:number){
        this.type = type
        this.make = make
    }

    get_vehicle_make(){
        console.log(`the make of this vehicle is ${this.make}`)
    }
}

let my_vehicle = new Vehicle('blue', 'suv', 'toyota', 45567)
console.log(my_vehicle)
console.log(my_vehicle.get_vehicle_make())
