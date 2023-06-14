export function formatVideoDate(date) {
    let videoDate = newDate(date);
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
    
}