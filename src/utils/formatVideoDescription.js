export function formatVideoDescription(description) {
    let words = [];
    let splitDescription = String(description).split(' ');

    for(let i = 0; i < 18; i++) {
        words.push(splitDescription[i]);
    }

    return words.join(' ') + '...';
}