import style from './PostHeader.module.css';

export default function PostHeader(props) {
    const { post } = props;

    return (
        <div className={`${style['post-header']}`}>
            <div className={`${style['avatar-container']}`}>
                <img
                    className={`${style['avatar-image']}`}
                    src={post.avatar || "./image/avatar/default_avatar.png"}
                    alt="avatar"
                />
            </div>
            <div className={`${style['name-time-container']}`}>
                <div className={`${style['name-text']}`}>
                    {`${post.firstName} ${post.lastName}`}
                </div>
                <div className={`${style['time-text']}`}>
                    {new Date(post.createdAt).toLocaleString()}
                </div>
            </div>
            <div className={`${style['post-options-container']}`}>
                <img height={20} width={20}
                    src="./image/icon/more-options.png"
                    alt="more-options"
                />
            </div>
        </div>
    )
}