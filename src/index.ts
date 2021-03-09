import { worlds } from "./legend";
import { LifelikeWorld } from "./life-like-world";

function startMove(world: LifelikeWorld) {
    console.clear();
    let counter: number = 0;
    
    const move = setInterval( () => {

        if (world.checkExtinction() || counter >= 300) {
            clearInterval(move);
            return
        } 

        console.clear();
        world.turn();
        counter += 1;
        world.countPopulation();

        console.log(world.toString());
        console.log(`day: ${counter}`);
        console.log(`plants: ${world.plants}`);
        console.log(`plantEaters: ${world.plantEaters}`);
        console.log(`carnivores: ${world.carnivores}`);
    }, 100);
}

startMove(new LifelikeWorld(worlds.desert.map, worlds.desert.legend));