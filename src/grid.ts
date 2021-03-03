import { WorldObject } from "./base-object-class";
import { Vector } from "./vector";

export class Grid {
    width: number;
    height: number;
    space: WorldObject[];

    constructor (gridWidth: number, gridHeight: number) {
        this.width = gridWidth;
        this.height = gridHeight;
        this.space = new Array(this.width * this.height);
    }

    isInside(vector: Vector) {
        return vector.x >= 0 && vector.x < this.width &&
               vector.y >= 0 && vector.y < this.height;
    }

    get(vector: Vector) {
        return this.space[vector.x + this.width * vector.y];
    }

    set(vector: Vector, value: WorldObject) {
        this.space[vector.x + this.width * vector.y] = value;
    }

    forEach(f: Function, context: object) {
        for (var y = 0; y < this.height; y++) {
            for (var x = 0; x < this.width; x++) {
                
                let value = this.space[x + y * this.width];

                if (value !== null)
                    f.call(context, value, new Vector(x, y));
            }
        }
    };
}
