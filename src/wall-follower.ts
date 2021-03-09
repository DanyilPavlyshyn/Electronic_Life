import { directionNames } from "./legend";
import { View } from "./view";

export class WallFollower {
    dir: string;

    constructor() {
        this.dir = 's';
    }

    dirPlus(dir: string, n: number) {
        const index = directionNames.indexOf(dir);
        return directionNames[(index + n + 8) % 8];
    }

    act(view: View) {
        let start = this.dir;
    
        if (view.look( this.dirPlus(this.dir, -3)) != " ") {
            start = this.dir = this.dirPlus(this.dir, -2);
        }
        while (view.look(this.dir) != " ") {
            this.dir = this.dirPlus(this.dir, 1);
            if (this.dir == start) break;
        }
        return {type: "move", direction: this.dir};
    }

    maneuver(view: View) {
        const directionNames = ["n","ne","e","se","s","sw","w","nw"];

        function dirPlus(dir: string, n: number) {
            const index = directionNames.indexOf(dir);
            return directionNames[(index + n + 8) % 8];
        }

        let start = this.dir;
    
        if (view.look( dirPlus(this.dir, -3)) != " ")
            start = this.dir = this.dirPlus(this.dir, -2);
        while (view.look(this.dir) != " ") {
            this.dir = this.dirPlus(this.dir, 1);
            if (this.dir == start) break;
        }
        return {type: "move", direction: this.dir};
    }
}