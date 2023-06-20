export function formatSubscriberCount(subscribers) {
    let subscribersNum = Number(subscribers);
    let splitNum = subscribers.split('');

    if(subscribersNum < 1000) {
        return subscribersNum === 1 ? '1 subscriber' : `${subscribers} subscribers`;
    }
    else if(subscribersNum >= 1000 && subscribersNum < 1000000) {
        let num;

        if(splitNum.length === 4) {
            if(Number(splitNum[1]) === 0) {
                num = splitNum[0];
            }
            else {
                num = splitNum[0] + '.' + splitNum[1];
            }
        }
        else if(splitNum.length === 5) {
            if(Number(splitNum[2]) === 0) {
                num = splitNum[0] + splitNum[1];
            }
            else {
                num = splitNum[0] + splitNum[1] + '.' + splitNum[2];
            }
        }
        else {
            num = splitNum[0] + splitNum[1] + splitNum[2];
        }

        return num + 'K subscribers';
    }
    else {
        let num;

        if(splitNum.length === 7) {
            if(Number(splitNum[1]) === 0) {
                num = splitNum[0];
            }
            else {
                num = splitNum[0] + '.' + splitNum[1];
            }
        }
        else if(splitNum.length === 8) {
            if(Number(splitNum[2]) === 0) {
                num = splitNum[0] + splitNum[1];
            }
            else {
                num = splitNum[0] + splitNum[1] + '.' + splitNum[2];
            }
        }
        else {
            num = splitNum[0] + splitNum[1] + splitNum[2];
        }
        
        return num + 'M subscribers';
    }
}