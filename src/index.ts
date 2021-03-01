import { worlds } from "./legend";
import { LifelikeWorld } from "./life-like-world";
import { World } from "./world";

function startMove(world: World) {
    console.clear();
    let counter: number = 0;
    
    const move = setInterval( () => {
        console.clear();
        world.turn();
        counter += 1;
        console.log(world.toString());

        if (counter >= 40) {
            clearInterval(move);
            return
        } 
    }, 500);
}

startMove(new LifelikeWorld(worlds.valley.map, worlds.valley.legend));