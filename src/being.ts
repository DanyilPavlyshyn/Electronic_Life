import { Action } from './action';
import { WorldObject } from './base-object-class';
import { Grid } from './grid';
import { View } from './view';

export class Being extends WorldObject {
    constructor() {
        super();

    }

    act(view: Record<string, Function>) {

        if (view.look(this.direction) != " ")

        this.direction = view.find(" ") || "s";

        return {type: "move", direction: this.direction};
    }
}
