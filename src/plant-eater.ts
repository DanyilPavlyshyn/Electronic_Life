import { WorldObject } from "./base-object-class";
import { View } from "./view";

export class PlantEater extends WorldObject {
    energy: number;
    lastDir: string;
    appropriateFood: string;

    constructor() {
        super();
        this.energy = 20;
        //this.lastMove = lastMove;
    }

    act(context: View) {
        const space = context.find(" ");

        if (this.energy > 60 && space) return {type: "reproduce", direction: space};
        
        const plant = context.find("*");
        
        if (plant) return {type: "eat", direction: plant};

        if (space) return {type: "move", direction: space};
    }
}
