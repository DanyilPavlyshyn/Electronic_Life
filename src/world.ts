import { Grid, Vector } from './grid';

const info = {
    '#': 'стены и камни',
    'o': 'существо',
    ' ': 'пустое пространство'
};

const legend: string[] = [
            "############################",
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"
        ];

function elementFromChar(legend: {ch: string}, ch: string) {
    if (ch == " ") return null;
    let element: {originChar: string} = new legend[ch]();
    element.originChar = ch;
    return element;
}

function charFromElement(element: {originChar: string}) {
    if (element == null)
      return " ";
    else
      return element.originChar;
  }

export class World {
    legend: object;
    grid: {
        height: number,
        width: number,
        get: Function,
        set: Function
    };

    constructor(map: string[], legend: object) {
        this.grid = new Grid(map[0].length, map.length);
        this.legend = legend;

        map.forEach(function(line, y) {
            for (var x = 0; x < line.length; x++) {
              this.grid.set(new Vector(x, y), elementFromChar(legend, line[x]));
            }
        });
    }

    toString() {
        let output = "";

        for (let y = 0; y < this.grid.height; y++) {
          for (let x = 0; x < this.grid.width; x++) {
            let element = this.grid.get(new Vector(x, y));
            output += charFromElement(element);
          }
          output += "\n";
        }
        return output;
    }

    turn() {

    }
}

export const Wall = {};