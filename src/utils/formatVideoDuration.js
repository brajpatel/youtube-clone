export function formatVideoDuration(duration) {
    let total = 0;
    let hours = duration.match(/(\d+)H/);
    let minutes = duration.match(/(\d+)M/);
    let seconds = duration.match(/(\d+)S/);
    
    if (hours) total += parseInt(hours[1]) * 3600;
    if (minutes) total += parseInt(minutes[1]) * 60;
    if (seconds) total += parseInt(seconds[1]);

    return total;
}