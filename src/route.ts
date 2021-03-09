import { Grid } from "./grid";
import { utils } from "./utils";
import { Vector } from "./vector";
import { directions, View } from "./view";


export class Route {
    grid: Grid;
    a: Vector;
    b: Vector;
    view: View;
    dirs: string[];

    constructor(view: View, a: Vector, b: Vector) {
        this.view = view;
        this.grid = view.world.grid;
        this.a = a;
        this.b = b;
        this.dirs = this.getDirs();
    }

    getDirs() {
        const directionNames = ["n","ne","e","se","s","sw","w","nw"];
        let dir = utils.gefineDir(this.a, this.b);
        let dirs: string[] = [];
        let end = this.b;

        let counter = 0;

        function dirPlus(dir: string, n: number) {
            const index = directionNames.indexOf(dir);
            return directionNames[(index + n + 4) % 4];
        }

        function findSpace(current: View, dir: string) {           
            
            if (current.vector.x === end.x && current.vector.y === end.y) return

            if(counter >= 10) return 

            counter += 1;

            let start = dir;
        
            if (current.look(dir) !== " ") { 
                while (current.look(dir) !== " ") {
                    dir = dirPlus(dir, 1);
                    if (dir === start) break;
                }
            }

            dirs.unshift(dir);
            current.vector = current.vector.plus(directions[dir]);
            findSpace(current, dir);
        }

        findSpace(this.view, dir);

        return dirs;
    }
}