export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;
    do {
        let m = Math.floor(lo + ((hi - lo) / 2)); // Gets the middle of array
        let v = haystack[m];
        if (v === needle) {
            return true;
        } else if (v > needle) {// needle is on the  first half of array
            hi = m;
        } else { // needle is on the second half of arr ay
            lo = m + 1;
        }
    } while (lo < hi);
    return false;
}