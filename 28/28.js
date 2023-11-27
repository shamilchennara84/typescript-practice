var Car = /** @class */ (function () {
    function Car(name, mileage, max_speed) {
        this.name = name;
        this.mileage = mileage;
        this.max_speed = max_speed;
        this.name = name,
            this.mileage = mileage,
            this.max_speed = max_speed;
    }
    return Car;
}());
var car = new Car('BMW', 20, 250);
console.log(car);
