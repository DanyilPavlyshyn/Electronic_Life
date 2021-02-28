import { directionNames } from "./legend";
import { TView } from "./view";

export class WallFollower {
    dir: string;

    constructor() {
        this.dir = 's';
    }

    dirPlus(dir: string, n: number) {
        const index = directionNames.indexOf(dir);
        return directionNames[(index + n + 8) % 8];
    }

    act(view: TView) {
        let start = this.dir;
    
        if (view.look( this.dirPlus(this.dir, -3)) != " ")
            start = this.dir = this.dirPlus(this.dir, -2);
        while (view.look(this.dir) != " ") {
            this.dir = this.dirPlus(this.dir, 1);
            if (this.dir == start) break;
        }
        return {type: "move", direction: this.dir};
    }
}