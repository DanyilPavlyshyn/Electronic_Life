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
    }
}
