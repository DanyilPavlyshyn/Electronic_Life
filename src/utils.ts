
export const utils = {

    elementFromChar(legend: Record<string, any>, char: string) {

        if (char === " ") return null;
        
        const element = new legend[char]();
        element.originChar = char;
        return element;
    },

    charFromElement(element: {originChar: string}) {
        if (element == null)
        return " ";
        else
        return element.originChar;
    }
}
