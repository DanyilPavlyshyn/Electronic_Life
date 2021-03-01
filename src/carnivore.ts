import { WorldObject } from "./base-object-class";
import { View } from "./view";

export class Сarnivore extends WorldObject {
    energy: number;

    constructor() {
        super();
        this.energy = 30;
    }

    act(context: View) {
        const space = context.find(" ");

        if (this.energy > 60 && space) return {type: "reproduce", direction: space};
        
        const plant = context.find("*");
        
        if (plant) return {type: "eat", direction: plant};

        if (space) return {type: "move", direction: space};
    }
}