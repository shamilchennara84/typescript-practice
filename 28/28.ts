class Car {
    constructor(public name:string,public mileage: number,public max_speed : number){
        this.name = name,
        this.mileage = mileage,
        this.max_speed = max_speed
    }
}

const car = new Car ('BMW',20,250)
console.log(car);