export function formatVideoDescription(description) {
    let words = [];
    let splitDescription = description.split(' ');

    for(let i = 0; i < 18; i++) {
        words.push(splitDescription[i]);
    }

    return words.join(' ') + '...';
}