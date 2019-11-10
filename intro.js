// introduction to type script
function greeting(name) {
    return "Hello" + name;
}
var person = "Josiah";
greeting(person);
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, LastName) {
        this.fullName = firstName + "" + middleInitial + "" + LastName;
    }
    Student.prototype.Promote = function (student) {
        ///code here
        return true;
    };
    return Student;
}());
///abdullah comment let do it together.
var student1 = new Student("Josiah", "Ayoola", "Isong");
console.log(student1);
console.log(typeof (student1));
function add(a, x) {
    var sum = a + x;
    return sum;
}
var magic = add(1, 2);
console.log(magic);
console.log(typeof (magic));
var Vehicle = /** @class */ (function () {
    function Vehicle(color, type, make, engine_number) {
        this.type = type;
        this.make = make;
    }
    Vehicle.prototype.get_vehicle_make = function () {
        console.log("the make of this vehicle is " + this.make);
    };
    return Vehicle;
}());
var my_vehicle = new Vehicle('blue', 'suv', 'toyota', 45567);
console.log(my_vehicle);
console.log(my_vehicle.get_vehicle_make());
