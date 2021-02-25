import { Grid, Vector } from './grid';

export class Being {
    constructor() {

    }
    /*
        {
            "n":  string,
            "ne": string,
            "e":  string,
            "se": string,
            "s":  string,
            "sw": string,
            "w":  string,
            "nw": string
        }
    */

    act(view: object) {
        return new Action();
    }
};

export class Action {
    type: string;
    direction: string;

    constructor(view: {look: Function, find: Function}) {
        const directionNames: string[] = ["n","ne","e","se","s","sw","w","nw"];
        this.direction = directionNames[Math.floor(Math.random() * directionNames.length)];

        if (view.look(this.direction) != ' ') {
            this.direction = view.find(' ') || 's';
            return {type: 'move', direction: this.direction};
        }
    }

}

class View {
    grid: {get: Function};
    directions: string[];

    constructor(grid: {get: Function}) {   
        this.grid = grid;
        this.directions = ["n","ne","e","se","s","sw","w","nw"];
    }

    look(side: string) {

        interface Directions {
            [key: string]: object
        }
             
        let directions: Directions = {
            "n":  new Vector( 0, -1),
            "ne": new Vector( 1, -1),
            "e":  new Vector( 1,  0),
            "se": new Vector( 1,  1),
            "s":  new Vector( 0,  1),
            "sw": new Vector(-1,  1),
            "w":  new Vector(-1,  0),
            "nw": new Vector(-1, -1)
        };

        return this.grid.get(directions[side]);
    }

    find(symbol: string) {
        return this.directions.find(el => this.look(el) === symbol) ?? null;
    }

    findAll(symbol: string) {
        return this.directions.filter(el => this.look(el) === symbol) ?? null;
    }
}
