export class Vector {
    x: number;
    y: number;

    constructor (x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    plus(other: {x: number, y: number}) {
        return new Vector(this.x + other.x, this.y + other.y);
    }
}