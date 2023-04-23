export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        const middle = Math.floor((low+high)/2);
        const v = haystack[middle];

        if (v === needle) {
            return true;
        } else if (needle > v) {
            low = middle + 1;
        } else {
            high = middle;
        }
    } while (low < high);

    return false;
}
