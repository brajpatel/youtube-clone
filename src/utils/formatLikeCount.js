export function formatLikeCount(likes) {
    let likesNum = Number(likes);
    let splitNum = likes.split('');

    if(likesNum < 1000) {
        return likes;
    }
    else if(likesNum >= 1000 && likesNum < 1000000) {
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

        return num + 'K';
    }
    else if(likesNum >= 1000000 && likesNum < 1000000000) {
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
                num = splitNum[0];
            }
            else {
                num = splitNum[0] + splitNum[1] + '.' + splitNum[2];
            }
        }
        else {
            num = splitNum[0] + splitNum[1] + splitNum[2];
        }

        return num + 'M';
    }
    else {
        return splitNum[0] + 'B';
    }
}