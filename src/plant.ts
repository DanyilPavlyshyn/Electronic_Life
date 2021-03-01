import { WorldObject } from "./base-object-class";
import { View } from "./view";

export class Plant extends WorldObject {
    energy: number;

    constructor() {
        super();
        this.energy = 3 + Math.random() * 4;
    }
  
    act(context: View) {
        if (this.energy > 15) {
        var space = context.find(" ");
        if (space)
            return {type: "reproduce", direction: space};
        }
        if (this.energy < 20)
        return {type: "grow"};
    }
}