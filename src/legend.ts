import { Being } from "./being";
import { Wall } from "./world";

const info = {
    '#': 'стены и камни',
    'o': 'существо',
    ' ': 'пустое пространство'
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

export const legend = {"#": Wall, "o": Being};