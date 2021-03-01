import { WorldObject } from './base-object-class';
import { View } from './view';

export class Being extends WorldObject {
    energy: number;
    originChar: string;

    constructor() {
        super();
        this.energy = 20;
    }

    act(view: View) {

        if (view.look(this.direction) != " ")

        this.direction = view.find(" ") || "s";

        return {type: "move", direction: this.direction};
    }
}