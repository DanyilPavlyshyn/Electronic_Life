import { Action } from './action';
import { WorldObject } from './base-object-class';
import { Grid } from './grid';
import { View } from './view';

export class Being extends WorldObject {
    energy: number;

    constructor() {
        super();
        this.energy = 20;
    }

    act(view: Record<string, Function>) {

        if (view.look(this.direction) != " ")

        this.direction = view.find(" ") || "s";

        return {type: "move", direction: this.direction};
    }
}

export type TBeing = Record<string, any>;

export interface IBeing {
    act: Function
}