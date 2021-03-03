import { Action } from "./action";
import { Being } from "./being";
import { SmartPlantEater } from "./smart-plant-eater";
import { utils } from "./utils";
import { Vector } from "./vector";
import { View } from "./view";
import { World } from "./world";

export class LifelikeWorld extends World {
    actionTypes: Record<string, Function>;
    plants: number;
    plantEaters: number;
    carnivores: number;

    constructor(map: string[], legend: object) {
        super(map, legend);
        this.actionTypes = actionTypes;
        this.legend = legend;
    }

    letAct(being: Being, vector: Vector) {
        const action: Action = being.act(new View(this, vector));

        const handled = action 
                && action.type in this.actionTypes 
                && this.actionTypes[action.type].call(this, being, vector, action);

        if (!handled) {
            being.energy -= 0.2;
          if (being.energy <= 0)
            this.grid.set(vector, null);
        }
    }

    countPopulation() {
        const arrWorld = this.toString().split('');

        this.plants = arrWorld.filter(char => char === '*').length;
        this.plantEaters = arrWorld.filter(char => char === 'O').length;
        this.carnivores = arrWorld.filter(char => char === '@').length;
    }

    checkExtinction(): any {
        return this.plants === 0
            ? true
            : this.plantEaters === 0
                ? true
                : this.carnivores === 0
                    ? true
                    : false
    }
}

const actionTypes: Record<string, any> = {

    grow(being: Being) {
        being.energy += 0.5;
        return true;
    },

    move(being: SmartPlantEater, vector: Vector, action: Action) {

        const dest = this.checkDestination(action, vector);

        if (dest === null
                || being.energy <= 1
                || this.grid.get(dest) !== null) {
          return false;
        }
        
        being.energy -= 1;
        this.grid.set(vector, null);
        this.grid.set(dest, being);
        being.x = vector.x;
        being.y = vector.y;
        return true;
    },

    eat(being: Being, vector: Vector, action: Action) {
        const dest = this.checkDestination(action, vector);
        const atDest = dest != null && this.grid.get(dest);

        if (!atDest || atDest.energy == null) return false;  
        
        being.energy += atDest.energy;
        this.grid.set(dest, null);
        return true;
    },

    reproduce(being: Being, vector: Vector, action: Action) {
        const baby = utils.elementFromChar(this.legend, being.originChar);
        const dest = this.checkDestination(action, vector);

        if (dest == null || being.energy <= 2 * baby.energy || this.grid.get(dest) != null) {
          return false;
        }
        
        being.energy -= 2 * baby.energy;
        this.grid.set(dest, baby);
        return true;
    }
}