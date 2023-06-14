export function formatVideoDate(date) {
    let videoDate = new Date(date);
    let currentDate = new Date();

    let numDays = Math.floor((currentDate - videoDate) / 86400000);

    if(!numDays) {
        let numSeconds = Math.floor((currentDate - videoDate) / 1000);

        if(numSeconds < 60) {
            return numSeconds === 1 ? '1 second ago' : `${numSeconds} seconds ago`;
        }
        else if(numSeconds >= 60 && numSeconds < 3600) {
            let numMinutes = Math.floor(numSeconds / 60);

            return numMinutes === 1 ? '1 minute ago' : `${numMinutes} minutes ago`;
        }
        else {
            let numMonths = Math.floor(numSeconds / 3600);

            return numMonths === 1 ? '1 hours ago' : `${numMonths} hours ago`;
        }
    }
    else {
        if(numDays < 14) {
            return numDays === 1 ? '1 day ago' : `${numDays} days ago`;
        }
        else if(numDays >= 14 && numDays < 31) {
            let numWeeks = Math.floor(numDays / 7);

            return numWeeks === 1 ? '1 week ago' : `${numWeeks} weeks ago`;
        }
        else if(numDays >= 31 && numDays < 365) {
            let numMonths = Math.floor(numDays / 31);

            return numMonths === 1 ? '1 month ago' : `${numMonths} months ago`;
        }
        else {
            let numYears = Math.floor(numDays / 365);

            return numYears === 1 ? '1 year ago' : `${numYears} years ago`;
        }
    }
}