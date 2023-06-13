export function formatVideoDuration(duration) {
    let total = '';
    let hours = duration.match(/(\d+)H/);
    let minutes = duration.match(/(\d+)M/);
    let seconds = duration.match(/(\d+)S/);

    if(hours) total += (hours[1] + ':');

    if(minutes) {
        if(minutes[1].length === 1) {
            total += ('0' + minutes[1] + ':');
        }
        else {
            total += (minutes[1] + ':');
        }
    }

    if(seconds) {
        if(seconds[1].length === 1) {
            total += ('0' + seconds[1]);
        }
        else {
            total += seconds[1];
        }
    }

    return total;
}