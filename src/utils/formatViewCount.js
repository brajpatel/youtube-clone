export function formatViewCount(views) {
    let viewsNum = Number(views);
    let splitNum = String(views).split('');

    if(viewsNum < 1000) {
        return viewsNum === 1 ? '1 view' : `${views} views`;
    }
    else if (viewsNum >= 1000 && viewsNum < 1000000) {
        let num;

        if(splitNum.length === 4) {
            num = splitNum[0];
        }
        else if(splitNum.length === 5) {
            num = `${splitNum[0]}${splitNum[1]}`;
        }
        else {
            num =`${splitNum[0]}${splitNum[1]}${splitNum[2]}`
        }

        return num + 'K views';
    }
    else if (viewsNum >= 1000000 && viewsNum < 1000000000) {
        let num;

        if(splitNum.length === 7) {
            num = splitNum[0];
        }
        else if(splitNum.length === 8) {
            num = `${splitNum[0]}${splitNum[1]}`;
        }
        else {
            num =`${splitNum[0]}${splitNum[1]}${splitNum[2]}`
        }

        return num + 'M views';
    }
    else {
        return splitNum.length === 10 ? `${splitNum[0]}B views` : `${splitNum[0]}${splitNum[1]}B views`;
    }
}