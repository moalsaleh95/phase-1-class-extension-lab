// Your code here
class Polygon {
    constructor(array) {
        this.array = array;
    }
    get countSides() {
        return this.array.length;
    }

    get perimeter() {
        let total = 0;
        this.array.forEach(side => {
            total += side;
        });
        return total;
    }
}

class Triangle extends Polygon {
    get isValid() {
        let side1 = this.array[0];
        let side2 = this.array[1];
        let side3 = this.array[2];
        return ((side1 + side2) > side3 && (side1 + side3) > side2 && (side2 + side3) > side1)
    }
}

class Square extends Polygon {
    get isValid() {
        let status = '';
        for (let i = 0; i < this.array.length - 1; i++) {
            if (this.array[i] !== this.array[i + 1]) {
                console.log('i:', i, 'before:', this.array[i], 'after:', this.array[i + 1])
                status = false;
                break;
            } else {
                console.log('i:', i, 'before:', this.array[i], 'after:', this.array[i + 1])

                status = true;
            }
        }
        return status;
    }

    get area() {
        for (let i = 0; i < this.array.length; i++) {
            return this.array[i] * this.array[i + 1];
        }
    }
}

// let square = new Square([2, 3, 2, 2]);
let triangle = new Triangle([1, 4, 4])
console.log(triangle.isValid)
