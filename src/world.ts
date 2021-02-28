import { IAction } from './action';
import { IBeing } from './being';
import { Grid, IGrid } from './grid';
import { utils } from './utils';
import { IVector, Vector } from './vector';
import { directions, View } from './view';

export class World {
    legend: object;
    grid: IGrid;

    constructor(map: string[], legend: object) {
        this.grid = new Grid(map[0].length, map.length);
        this.legend = legend;

        map.forEach((line, y) => {
            for (var x = 0; x < line.length; x++) {
              this.grid.set(new Vector(x, y), utils.elementFromChar(legend, line[x]));
            }
        });
    }

    toString() {
        let output = "";

        for (let y = 0; y < this.grid.height; y++) {
          for (let x = 0; x < this.grid.width; x++) {
            let element = this.grid.get(new Vector(x, y));
            output += utils.charFromElement(element);
          }
          output += "\n";
        }
        return output;
    }

    turn() {
      const acted: object[] = [];
      //const strGrid: string = this.grid.toString();

      this.grid.forEach((being: IBeing, vector: IVector) => {

        if (being.act && acted.indexOf(being) == -1) {
          acted.push(being);
          this.letAct(being, vector);
        }

      });
    }

    letAct(being: IBeing, vector: IVector) {
      const action = being.act(new View(this, vector));

      if (action && action.type == "move") {
        const dest = this.checkDestination(action, vector);

        if (dest && this.grid.get(dest) == null) {
          this.grid.set(vector, null);
          this.grid.set(dest, being);
        }

      }
    };

    checkDestination(action: IAction, vector: IVector) {
      
      if (directions.hasOwnProperty(action.direction)) {
        var dest = vector.plus(directions[action.direction]);
        if (this.grid.isInside(dest))
          return dest;
      }

    };
}

export type TWorld = Record<string, any>;

export class Wall {
  constructor() {
    return '#'
  }
};