export function formatCommentNumber(commentCount) {
    let commentsNum = Number(commentCount);
    let numLength = String(commentCount).length;

    if(commentsNum < 1000) {
        return commentsNum === 1 ? '1 Comment' : `${commentCount} Comments`;
    }
    else {
        let num;

        switch(numLength) {
            case 4:
                num = commentCount.slice(0, 1) + ',' + commentCount.slice(1);

            case 5:
                num = commentCount.slice(0, 2) + ',' + commentCount.slice(2);
    
            case 6:
                num = commentCount.slice(0, 3) + ',' + commentCount.slice(3);

            case 7:
                num = commentCount.slice(0, 1) + ',' + commentCount.slice(1, 4) + ',' + commentCount.slice(4);

            case 8:
                num = commentCount.slice(0, 2) + ',' + commentCount.slice(2, 5) + ',' + commentCount.slice(5);
        }

        return `${num} Comments`;
    } 
}