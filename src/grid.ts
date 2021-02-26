export class Grid {
    width: number;
    height: number;
    vector: object;
    space: string[];

    constructor (gridWidth: number, gridHeight: number) {
        this.width = gridWidth;
        this.height = gridHeight;
        this.space = new Array(this.width * this.height);
        return this
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

export interface IGrid {
    height: number,
    width: number,
    get: Function,
    set: Function
}