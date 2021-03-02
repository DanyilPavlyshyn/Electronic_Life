import { utils } from "./utils";
import { Vector } from "./vector";
import { World } from "./world";

export class View {
    directionNames: string[];
    world: World;
    vector: Vector;

    constructor(world: World, vector: Vector) {
        this.world = world;
        this.vector = vector;
        this.directionNames = ["n","ne","e","se","s","sw","w","nw"];
    }

    look(dir: string) {
        const target = this.vector.plus(directions[dir]);

        if (this.world.grid.isInside(target)) {
            return utils.charFromElement(this.world.grid.get( target ));
        } else {
            return "#";
        }
    }

    find(symbol: string) {
        return this.directionNames.find(el => this.look(el) === symbol) ?? null;
    }

    findAll(symbol: string) {
        return this.directionNames.filter(el => this.look(el) === symbol) ?? null;
    }

    findFoodDirection(symbol: string, directions: string[]) {
        return directions.find(el => this.look(el) === symbol) ?? null;
    }

    findAllFood(target: string) {
        const allFood: Vector[] = [];

        this.world.grid.forEach( (value: string, vector: Vector) => {
            if (value === target) {
                allFood.push(vector);
            }
        }, this.world)

        return allFood
    }
}

export const directions: Record<string, any> = {
    "n":  new Vector( 0, -1),
    "ne": new Vector( 1, -1),
    "e":  new Vector( 1,  0),
    "se": new Vector( 1,  1),
    "s":  new Vector( 0,  1),
    "sw": new Vector(-1,  1),
    "w":  new Vector(-1,  0),
    "nw": new Vector(-1, -1)
};