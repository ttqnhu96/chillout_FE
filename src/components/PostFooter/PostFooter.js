import { Fragment, memo } from 'react';
import Comment from '../Comment/Comment';
import InputComment from '../InputComment/InputComment';

function PostFooter(props) {
    const { post } = props;
    //const { postId, commentList } = useSelector(state => state.CommentReducer);

    const renderCommentList = () => {
        // if (postId === post.id) {
            return post.commentList.map((comment, index) => (
                <Comment key={index} comment={comment} />
            ))
    }

    return (
        <Fragment>
            {/* Comment list */}
            {renderCommentList()}

            {/* Comment text box */}
            <InputComment postId={post.id} />
        </Fragment>
    )
}

export default memo(PostFooter)