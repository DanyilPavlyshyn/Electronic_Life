import { legend } from "./legend";
import { Wall, World } from "./world";

const plan: string[] = [
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

var world = new World(plan, legend);
console.log(world.toString());