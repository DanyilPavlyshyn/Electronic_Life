import { Grid, IGrid } from './grid';
import { Vector } from './vector';

export class World {
    legend: object;
    grid: IGrid;

    constructor(map: string[], legend: object) {
        this.grid = new Grid(map[0].length, map.length);
        this.legend = legend;

        map.forEach(function(line, y) {
            for (var x = 0; x < line.length; x++) {
              this.grid.set(new Vector(x, y), this.elementFromChar(legend, line[x]));
            }
        });
    }

    toString() {
        let output = "";

        for (let y = 0; y < this.grid.height; y++) {
          for (let x = 0; x < this.grid.width; x++) {
            let element = this.grid.get(new Vector(x, y));
            output += this.charFromElement(element);
          }
          output += "\n";
        }
        return output;
    }

    turn() {

    }

    
  elementFromChar(legend: Record<string, any>, char: string): string | null {

    if (char === " ") return null;
    
    var element = new legend[char]();
    element.originChar = char;
    return element;
  }

  charFromElement(element: {originChar: string}) {
    if (element == null)
    return " ";
    else
    return element.originChar;
  }
}

export class Wall {
  constructor() {
    return '#'
  }
};