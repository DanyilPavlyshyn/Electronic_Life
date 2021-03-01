export class Action {
    type: string;
    direction: string;

    constructor(view: {look: Function, find: Function}) {
        const directionNames: string[] = ["n","ne","e","se","s","sw","w","nw"];
        this.direction = directionNames[Math.floor(Math.random() * directionNames.length)];

        if (view.look(this.direction) != ' ') {
            this.direction = view.find(' ') || 's';
            return {type: 'move', direction: this.direction};
        }
    }

}
