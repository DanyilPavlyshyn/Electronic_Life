import { PlantEater } from "./plant-eater";
import { View } from "./view";

export class SmartPlantEater extends PlantEater {
    energy: number;

    constructor() {
        super();

    }

    act(context: View) {
        const space = context.find(" ");

        if (this.energy > 60 && space) return {type: "reproduce", direction: space};
        
        const plant = context.find("*");
        
        if (plant) return {type: "eat", direction: plant};

        if (space) return {type: "move", direction: space};
    }
}