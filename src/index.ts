import { SomeClass } from './some-class';
import { Grid, Vector } from './grid';
import { World, Wall } from './world';
import { Action } from './being';

/*
var grid = new Grid(5, 5);
console.log(grid.get(new Vector(1, 1))); // → undefined

grid.set(new Vector(1, 1), "X");
console.log(grid.get(new Vector(1, 1))); // → X

return element;
*/

var plan: string[] = [
            "############################",
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"
        ];

var world = new World(plan, {"#": Wall, "o": Action});
console.log(world.toString());