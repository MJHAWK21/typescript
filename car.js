var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.speed = 0;
    }
    Car.prototype.accelerate = function (speed) {
        this.speed += speed;
        console.log("Accelerating to ".concat(this.speed, " mph..."));
    };
    Car.prototype.decelerate = function (speed) {
        this.speed -= speed;
        console.log("Decelerating to ".concat(this.speed, " mph..."));
    };
    Car.prototype.stop = function () {
        this.speed = 0;
        console.log("Stopping the car...");
    };
    return Car;
}());
// Example usage
var myCar = new Car("Toyota", "Camry", 2022);
console.log("My car is a ".concat(myCar.year, " ").concat(myCar.make, " ").concat(myCar.model, "."));
myCar.accelerate(50); // Output: Accelerating to 50 mph...
myCar.decelerate(20); // Output: Decelerating to 30 mph...
myCar.stop(); // Output: Stopping the car...
