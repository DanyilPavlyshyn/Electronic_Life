export class Grid {
    width: number;
    height: number;
    vector: object;
    space: string[];

    constructor (gridWidth: number, gridHeight: number) {
        this.width = gridWidth;
        this.height = gridHeight;
        this.space = new Array(this.width * this.height);
    }

    isInside(vector: {x: number, y: number}) {
        return vector.x >= 0 && vector.x < this.width &&
               vector.y >= 0 && vector.y < this.height;
    }

    get(vector: {x: number, y: number}) {
        return this.space[vector.x + this.width * vector.y];
    }

    set(vector: {x: number, y: number}, value: string) {
        this.space[vector.x + this.width * vector.y] = value;
    }
}

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

// передавая объект аргуметном функции, всегда указываем типы каждого свойства? {x: number, y: number}
// а если таких свойств 100 и мы не знаем какие будут нужны?