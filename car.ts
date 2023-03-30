class Car {
    make: string;
    model: string;
    year: number;
    speed: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.speed = 0;
    }
  
    accelerate(speed: number) {
      this.speed += speed;
      console.log(`Accelerating to ${this.speed} mph...`);
    }
  
    decelerate(speed: number) {
      this.speed -= speed;
      console.log(`Decelerating to ${this.speed} mph...`);
    }
  
    stop() {
      this.speed = 0;
      console.log(`Stopping the car...`);
    }
  }
  
  // Example usage
  const myCar = new Car("Toyota", "Camry", 2022);
  console.log(`My car is a ${myCar.year} ${myCar.make} ${myCar.model}.`);
  myCar.accelerate(50); // Output: Accelerating to 50 mph...
  myCar.decelerate(20); // Output: Decelerating to 30 mph...
  myCar.stop(); // Output: Stopping the car...
  