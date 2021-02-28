import { Being } from "./being";
import { Plant } from "./plant";
import { PlantEater } from "./plant-eater";
import { WallFollower } from "./wall-follower";
import { Wall } from "./world";

const info = {
    '#': 'стены и камни',
    'o': 'существо',
    ' ': 'пустое пространство',
    "O": 'травоядное животное',
    "*": 'растение'
};

export const directionNames: string[] = [
    "n",
    "ne",
    "e",
    "se",
    "s",
    "sw",
    "w",
    "nw"
];

export const legend = {"#": Wall, "~": WallFollower, "o": Being};
export const legend2 = {"#": Wall, "O": PlantEater, "*": Plant};