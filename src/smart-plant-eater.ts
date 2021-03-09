import { PlantEater } from "./plant-eater";
import { Route } from "./route";
import { utils } from "./utils";
import { Vector } from "./vector";
import { View } from "./view";

export class SmartPlantEater extends PlantEater {
    energy: number;
    x: number;
    y: number;
    route: Route;

    constructor(x: number, y: number) {
        super();
        this.appropriateFood = '*';
        this.x = x;
        this.y = y;
    }

    act(context: View) {
        //let dirs = []; //["n","ne","e","se","s","sw","w","nw"]; 

        let closestFood;
        
        // если путь не существует или в конце пути - не еда или шаги в маршруте закончились - создаем маршрут
        if (
            !this.route ||
            utils.charFromElement(context.world.grid.get(this.route.b)) !== this.appropriateFood ||
            this.route.dirs.length < 1
            ) {
               
            closestFood = context.findClosestFood(this, this.appropriateFood, context);
            this.route = new Route(context, new Vector(this.x, this.y), closestFood);
        }

        const space = context.find(' ');
        const foodDirs = this.route.dirs;
        const foodDir = foodDirs.pop();

        if (this.energy > 100 && space) {
            return {type: "reproduce", direction: space};
        }
        
        const food = context.find(this.appropriateFood);
        
        if (food) {
            return {type: "eat", direction: food};
        };

        if (foodDir) {
            return {type: "move", direction: foodDir};
        }
    }
}
