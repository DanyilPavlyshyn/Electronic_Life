import { IGrid } from "./grid";
import { utils } from "./utils";
import { IVector, Vector } from "./vector";
import { TWorld } from "./world";

export class View {
    grid: IGrid;
    directions: string[];
    world: TWorld;
    vector: IVector;

    constructor(world: TWorld, vector: IVector) {
        this.world = world;
        this.vector = vector;
        this.directions = ["n","ne","e","se","s","sw","w","nw"];
        /*   
        this.grid = grid;
        
        */
    }

    look(dir: string) {
        const target = this.vector.plus(directions[dir]);

        if (this.world.grid.isInside(target)) {
            return utils.charFromElement(this.world.grid.get(target));
        } else {
            return "#";
        }
    }

    find(symbol: string) {
        return this.directions.find(el => this.look(el) === symbol) ?? null;
    }

    findAll(symbol: string) {
        return this.directions.filter(el => this.look(el) === symbol) ?? null;
    }
}

export type TView = Record<string, any>;

export interface IDirections {
    [key: string]: object
}

export const directions: IDirections = {
    "n":  new Vector( 0, -1),
    "ne": new Vector( 1, -1),
    "e":  new Vector( 1,  0),
    "se": new Vector( 1,  1),
    "s":  new Vector( 0,  1),
    "sw": new Vector(-1,  1),
    "w":  new Vector(-1,  0),
    "nw": new Vector(-1, -1)
};