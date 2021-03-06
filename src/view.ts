import { SmartPlantEater } from "./smart-plant-eater";
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

    findAllFood(food: string) {
        const allFood: Vector[] = [];

        this.world.grid.forEach( (value: {originChar: string}, vector: Vector) => {
    
            if (value.originChar === food) {
                allFood.push(vector);
            }
        }, this.world)

        return allFood
    }

    findClosestFood(being: SmartPlantEater, food: string, context: View) {
        const allFood = context.findAllFood(food);
        
        if (allFood.length > 0) {
            let closestFood = allFood[0];
            let distance = utils.calcDistance(being, allFood[0]);

            allFood.forEach( (vector, index) => {
                const newDistance = utils.calcDistance(being, vector);
        
                if (newDistance < distance) {
                    closestFood = allFood[index];
                    distance = newDistance;
                }
            });
            
            return closestFood
        }

        return null
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