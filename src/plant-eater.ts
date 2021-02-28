import { WorldObject } from "./base-object-class";
import { TBeing } from "./being";

export class PlantEater extends WorldObject {
    energy: number;

    constructor() {
        super();
        this.energy = 20;
    }

    act(context: TBeing) {
        const space = context.find(" ");

        if (this.energy > 60 && space) return {type: "reproduce", direction: space};
        
        const plant = context.find("*");
        
        if (plant) return {type: "eat", direction: plant};

        if (space) return {type: "move", direction: space};
    }
}
