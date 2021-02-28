import { IAction, TAction } from "./action";
import { TBeing } from "./being";
import { utils } from "./utils";
import { IVector } from "./vector";
import { View } from "./view";
import { World } from "./world";

export class LifelikeWorld extends World {
    actionTypes: TAction;

    constructor(map: string[], legend: object) {
        super(map, legend);
        this.actionTypes = actionTypes;
        this.legend = legend;
    }

    letAct(being: TBeing, vector: IVector) {
        const action: TAction = being.act(new View(this, vector));

        const handled = action 
                && action.type in this.actionTypes 
                && this.actionTypes[action.type].call(this, being, vector, action);

        if (!handled) {
            being.energy -= 0.2;
          if (being.energy <= 0)
            this.grid.set(vector, null);
        }
      };
}

const actionTypes: TAction = {

    grow(being: TBeing) {
        being.energy += 0.5;
        return true;
    },

    move(being: TBeing, vector: IVector, action: TAction) {

        const dest = this.checkDestination(action, vector);

        if (dest == null
                || being.energy <= 1
                || this.grid.get(dest) != null) {
          return false;
        }
        
        being.energy -= 1;
        this.grid.set(vector, null);
        this.grid.set(dest, being);
        return true;
    },

    eat(being: TBeing, vector: IVector, action: TAction) {
        const dest = this.checkDestination(action, vector);
        const atDest = dest != null && this.grid.get(dest);
        if (!atDest || atDest.energy == null) {
          return false;
          being.energy += atDest.energy;
        }
        this.grid.set(dest, null);
        return true;
    },

    reproduce(being: TBeing, vector: IVector, action: TAction) {
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