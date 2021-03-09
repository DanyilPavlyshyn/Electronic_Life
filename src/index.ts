import { worlds } from "./legend";
import { LifelikeWorld } from "./life-like-world";
/*
import { Route } from "./route";
import { Vector } from "./vector";
import { View } from "./view";
*/

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

/*
function test() {
    const world = new LifelikeWorld(worlds.desert.map, worlds.desert.legend);
    const vector = new Vector(1, 1);
    const view = new View(world, vector);
    const route = new Route(view, vector, new Vector(10, 20));

    console.log(`a: ${JSON.stringify(vector)} b: ${JSON.stringify(new Vector(10, 10))} dirs: ${JSON.stringify(route.dirs)}`)
}

test();
*/