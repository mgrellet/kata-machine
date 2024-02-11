// Given two crystal balls that will break if dropped from high enough
// distance, determine the exact spot in which it will break in the most
// optimized way.
export default function two_crystal_balls(breaks: boolean[]): number {

    const jmpAmount = Math.floor(Math.sqrt(breaks.length))
    let i = jmpAmount;

    for (; i < breaks.length; i = i + jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    i = i - jmpAmount;

    for (let j = 0; j < jmpAmount && i < breaks.length; i++, j++) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}