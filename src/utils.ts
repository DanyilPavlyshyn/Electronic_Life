import { SmartPlantEater } from "./smart-plant-eater";
import { Vector } from "./vector";

export const utils = {

    elementFromChar(legend: Record<string, any>, char: string, x: number = null, y: number = null) {

        if (char === " ") return null;
        
        const element = new legend[char](x, y);
        element.originChar = char;
        return element;
    },

    charFromElement(element: Record<string, any>) {
        if (element === null) return " ";
        return element.originChar;
    },

    calcDistance(being: SmartPlantEater, target: Vector): number {
        return Math.abs(being.x - target.x) + Math.abs(being.y - target.y)
    },

    gefineDir(being: Vector, food: Vector) {
        let dir = null;

        if (being.x > food.x) dir = "w"
        if (being.x < food.x) dir = "e"

        if (being.y > food.y) dir = "n"
        if (being.y < food.y) dir = "s"
/*
        if (being.x > food.x && being.y > food.y) dir = "nw"
        if (being.x < food.x && being.y < food.y) dir = "se"
        
        if (being.x > food.x && being.y < food.y) dir = "sw"
        if (being.x < food.x && being.y > food.y) dir = "ne"
*/
        return dir

                /*
        return directions.find(el => this.look(el) === symbol) ?? null;

        if (this.x > closestFood.x) dirs.push("w")
        if (this.x < closestFood.x) dirs.push("e")

        if (this.y > closestFood.y) dirs.push("n")
        if (this.y < closestFood.y) dirs.push("s")

        if (this.x > closestFood.x && this.y > closestFood.y) dirs.push("nw")
        if (this.x < closestFood.x && this.y < closestFood.y) dirs.push("se")
        
        if (this.x > closestFood.x && this.y < closestFood.y) dirs.push("sw")
        if (this.x < closestFood.x && this.y > closestFood.y) dirs.push("ne")

        if (being.x > food.x && being.y > food.y) dir = "nw"
        if (being.x < food.x && being.y < food.y) dir = "se"
        
        if (being.x > food.x && being.y < food.y) dir = "sw"
        if (being.x < food.x && being.y > food.y) dir = "ne"
        */
    }
}
