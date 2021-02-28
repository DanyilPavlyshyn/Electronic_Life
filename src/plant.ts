import { WorldObject } from "./base-object-class";
import { TBeing } from "./being";

export class Plant extends WorldObject {
    energy: number;

    constructor() {
        super();
        this.energy = 3 + Math.random() * 4;
    }
  
    act(context: TBeing) {
        if (this.energy > 15) {
        var space = context.find(" ");
        if (space)
            return {type: "reproduce", direction: space};
        }
        if (this.energy < 20)
        return {type: "grow"};
    }
}