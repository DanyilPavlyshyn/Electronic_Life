import { legend, legend2 } from "./legend";
import { LifelikeWorld } from "./life-like-world";
import { Wall, World } from "./world";

const plan: string[] = [
            "############################",
            "#                  o       #",
            "#           ~              #",
            "#          #####           #",
            "#          #   #           #",
            "#          #####           #",
            "#         ~                #",
            "#                   ~      #",
            "#            o             #",
            "# o            o           #",
            "#                          #",
            "############################"
        ];

var valley: string[] =
            ["############################",
             "#####                 ######",
             "##   ***                **##",
             "#   *##**         **  O  *##",
             "#    ***     O    ##**    *#",
             "#       O         ##***    #",
             "#                 ##**     #",
             "#   O       #*             #",
             "#*          #**       O    #",
             "#***        ##**    O    **#",
             "##****     ###***       *###",
             "############################"
        ];

let world = new LifelikeWorld(valley, legend2);
//let world = new World(plan, legend);

function startMove() {
    
    let counter: number = 0;
    
    const move = setInterval( () => {
        console.clear();
        world.turn();
        counter += 1;
        console.log(world.toString());

        if (counter >= 50) {
            clearInterval(move);
            return
        } 
    }, 400);
}

startMove();