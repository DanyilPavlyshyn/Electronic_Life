import { directionNames } from "./legend";

export class WorldObject {
    direction: string;

    constructor() {
        this.direction = directionNames[Math.floor(Math.random() * directionNames.length)]; 
        // определяем рандомное направление
    }

    elementFromChar(legend: Record<string, any>, char: string): string | null {

        if (char === " ") return null;
        
        var element = new legend[char]();
        element.originChar = char;
        return element;
    }

    charFromElement(element: Record<string, any>): string {
        if (element == null)
        return " ";
        else
        return element.originChar;
    }
}