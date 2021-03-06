import { Being } from "./being";
import { Сarnivore } from "./carnivore";
import { Plant } from "./plant";
import { PlantEater } from "./plant-eater";
import { SmartPlantEater } from "./smart-plant-eater";
import { WallFollower } from "./wall-follower";
import { Wall } from "./world";

/*
    '#': 'стены и камни',
    ' ': 'пустое пространство',
    "*": 'растение',
    'o': 'существо',
    "O": 'травоядное животное',
    "@": 'плотоядное животное'
*/

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

export const worlds = {
    box: {
        legend: {"#": Wall, "~": WallFollower, "o": Being},
        map: [
            "############################",
            "#                  o       #",
            "#           ~              #",
            "#          #####           #",
            "#          #   #           #",
            "#          #####           #",
            "#         ~                #",
            "#                   ~      #",
            "#            o             #",
            "# o            o           #",
            "#                          #",
            "############################"
        ]
    },

    valley: {
        legend: {"#": Wall, "O": PlantEater, "*": Plant},
        map: [
            "############################",
            "#####                 ######",
            "##   ***                **##",
            "#   *##**         **  O  *##",
            "#    ***     O    ##**    *#",
            "#       O         ##***    #",
            "#                 ##**     #",
            "#   O       #*             #",
            "#*          #**       O    #",
            "#***        ##**    O    **#",
            "##****     ###***       *###",
            "############################"
        ]
    },

    newValley: {
        legend: {"#": Wall, "O": SmartPlantEater, "*": Plant},
        map: [
            "############################",
            "#####                 ######",
            "##   ***                **##",
            "#   *##**         **     *##",
            "#    ***     O    ##**    *#",
            "#                 ##***    #",
            "#                 ##**     #",
            "#           #*             #",
            "#*          #**            #",
            "#***        ##**         **#",
            "##****     ###***       *###",
            "############################"
        ]
    },

    desert: {
        legend: {"#": Wall, "O": SmartPlantEater, "@": Сarnivore, "*": Plant},
        map: [
            "####################################################",
            "#                 ####         ****              ###",
            "#   *  @  ##                 ########       OO    ##",
            "#   *    ##        O O                 ****       *#",
            "#       ##*                        ##########     *#",
            "#      ##***  *         ****                     **#",
            "#* **  #  *  ***      #########                  **#",
            "#* **  #      *               #   *              **#",
            "#     ##              #   O   #  ***          ######",
            "#*            @       #       #   *        O  #    #",
            "#*                    #  ######                 ** #",
            "###          ****          ***                  ** #",
            "#       O                        @         O       #",
            "#   *     ##  ##  ##  ##               ###      *  #",
            "#   **         #              *       #####  O     #",
            "##  **  O   O  #  #    ***  ***        ###      ** #",
            "###               #   *****                    ****#",
            "####################################################"
        ]
    }
};