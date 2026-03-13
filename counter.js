let count = 0;

export function increment() {
    count += 1;
    return count;
}

export function reset() {
    count = 0;
    return count;
}
