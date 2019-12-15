
class Car {
    // Your code
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
        this.speed = 0;

    }
    accelerate(amount) {
        this.speed += amount;
    }

    brake(amount) {
        this.speed -= amount;
    }

    status  () {
        return console.log(this.brand + this.model + " running at " + this.speed + " km/h");
    }
    
}

let car = new Car("Renault", "Scenic");
car.accelerate();
car.brake();
car.status();

console.log(car); // Should return new object

// Then create additinal class CarColor, exteds from the Car class and add new method carColor() in this class
// which return car color
class CarColor extends Car{
    constructor(brand, model, color){
        super (brand, model);
              this.color = color;
        
    }
    

}
car = new CarColor("Renault", "Scenic", "Red");
console.log(car);