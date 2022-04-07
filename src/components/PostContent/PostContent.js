import { memo } from 'react';
import style from './PostContent.module.css';

function PostContent(props) {
    const { content } = props;

    return (
        <div className={`${style['post-content-container']}`}>
            {content}
        </div>
    )
}

export default memo(PostContent);