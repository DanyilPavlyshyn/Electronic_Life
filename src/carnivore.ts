import { SmartPlantEater } from "./smart-plant-eater";
import { utils } from "./utils";
import { View } from "./view";

export class Сarnivore extends SmartPlantEater {
    energy: number;

    constructor(x: number, y: number) {
        super(x, y);
        this.energy = 50;
    }

    act(context: View) {
        const allFood = context.findAllFood("O");
        let closestFood = allFood[0];
        let distance = utils.calcDistance(this, allFood[0]);
        
        allFood.forEach( (vector, index) => {
            const newDistance = utils.calcDistance(this, vector);
    
            if (newDistance < distance) {
                closestFood = allFood[index];
                distance = newDistance;
            }
        });
   
        const dirs = []; //["n","ne","e","se","s","sw","w","nw"]; 

        if (this.x > closestFood.x) dirs.push("w")
        if (this.x < closestFood.x) dirs.push("e")

        if (this.y > closestFood.y) dirs.push("n")
        if (this.y < closestFood.y) dirs.push("s")

        if (this.x > closestFood.x && this.y > closestFood.y) dirs.push("nw")
        if (this.x < closestFood.x && this.y < closestFood.y) dirs.push("se")
        
        if (this.x > closestFood.x && this.y < closestFood.y) dirs.push("sw")
        if (this.x < closestFood.x && this.y > closestFood.y) dirs.push("ne")

        const space = context.findFoodDirection(" ", dirs);

        if (this.energy > 100 && space) return {type: "reproduce", direction: space};
        
        const plantEater = context.findFoodDirection("O", dirs);
        
        if (plantEater) return {type: "eat", direction: plantEater};

        if (space) return {type: "move", direction: space};
    }
}