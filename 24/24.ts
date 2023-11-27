import * as readlineSync from "readline-sync";

class Area {
  circle(radius: number): number {
    return Math.PI * radius * radius;
  }

  square(side: number): number {
    return side * side;
  }

  rectangle(length: number, width: number): number {
    return length * width;
  }

  triangle(base: number, height: number): number {
    return 0.5 * base * height;
  }
}

class MyClass extends Area {
  main(): void {
    const choice: number = parseInt(
      readlineSync.question("Enter your choice:\n1. Circle\n2. Square\n3. Rectangle\n4. Triangle")
    );
    switch (choice) {
      case 1:
        const radius: number = parseFloat(readlineSync.question("enter the radius of the circle"));
        console.log(`area of the circle is ${this.circle(radius)}`);
        break;
      case 2:
        const side: number = parseFloat(readlineSync.question("enter the side of square"));
        console.log(`area of the square is ${this.square(side)}`);
        break;
      case 3:
        const length: number = parseFloat(readlineSync.question("enter the length of rectangle"));
        const width: number = parseFloat(readlineSync.question("enter the width of the rectangle"));
        console.log(`area of the rectangle is ${this.rectangle(length,width)}`);
        break;
      case 4:
        const base: number = parseFloat(readlineSync.question("enter the base of the triangle"));
        const height: number = parseFloat(readlineSync.question("enter the height of the trianlge"));
        console.log(`area of the traingle is ${this.triangle(base,height)}`);
        break;

        default:
            console.log("invalid choice !");
    }
  }
}

const myObj = new MyClass();
myObj.main();
