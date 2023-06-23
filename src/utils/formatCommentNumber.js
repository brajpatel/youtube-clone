export function formatCommentNumber(commentCount) {
    let commentsNum = Number(commentCount);
    let numLength = String(commentCount).length;

    if(commentsNum < 1000) {
        return commentsNum === 1 ? '1 Comment' : `${commentCount} Comments`;
    }
    else {
        let num;

        if(numLength === 4) {
            num = commentCount.slice(0, 1) + ',' + commentCount.slice(1);
        }
        else if(numLength === 5) {
            num = commentCount.slice(0, 2) + ',' + commentCount.slice(2);
        }
        else if(numLength === 6) {
            num = commentCount.slice(0, 3) + ',' + commentCount.slice(3);
        }
        else if(numLength === 7) {
            num = commentCount.slice(0, 1) + ',' + commentCount.slice(1, 4) + ',' + commentCount.slice(4);
        }
        else if(numLength === 8) {
            num = commentCount.slice(0, 2) + ',' + commentCount.slice(2, 5) + ',' + commentCount.slice(5);
        }

        return `${num} Comments`;
    } 
}