import './Comment.css';
import { formatVideoDate } from '../../../utils/formatVideoDate';
import { FiThumbsUp } from "react-icons/fi";
import { FiThumbsDown  } from 'react-icons/fi';
import { formatLikeCount } from '../../../utils/formatLikeCount';

function Comment(props) {
    const { info } = props;

    return (
        <div className='comment-container'>
            <img src={info.snippet.topLevelComment.snippet.authorProfileImageUrl}/>
            
            <div className='comment-info'>
                <div>
                    <p className='commenter'>{info.snippet.topLevelComment.snippet.authorDisplayName}</p>
                    <p className='comment-date'>{formatVideoDate(info.snippet.topLevelComment.snippet.publishedAt)}</p>
                </div>

                <p className='comment'>{info.snippet.topLevelComment.snippet.textOriginal}</p>

                <div>
                    <p><FiThumbsUp className='icon'/> {formatLikeCount(info.snippet.topLevelComment.snippet.likeCount)}</p>
                    <p><FiThumbsDown className='icon'/></p>
                    <p className='reply-button'>Reply</p>
                </div>
            </div>
        </div>
    )
}

export default Comment;