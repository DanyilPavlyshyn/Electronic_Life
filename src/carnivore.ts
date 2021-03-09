import { SmartPlantEater } from "./smart-plant-eater";

export class Сarnivore extends SmartPlantEater {
    energy: number;

    constructor(x: number, y: number) {
        super(x, y);
        this.appropriateFood = 'O';
        this.energy = 50;
    }
}