import { Carousel } from 'antd';
import { Fragment } from 'react';
import style from './PostBody.module.css';
import { AWS_S3_BUCKET_LINK } from '../../util/constants/systemSettings';

export default function PostBody(props) {
    // console.log('PostBody')
    const { post, likeIcon, totalLikes, handleLikePost } = props;

    const renderPhotoList = () => {
        return (
            post.photoList.map((photo, index) => (
                <div key={index}>
                    <img
                        className={`${style['post-photo']}`}
                        src={`${AWS_S3_BUCKET_LINK}/${photo.fileName}`}
                        alt="post_photo"
                    />
                </div>
            ))
        )
    }

    return (
        <Fragment>
            {/* Content */}
            <div className={`${style['post-content-container']}`}>
                {post.content}
            </div>

            {/* Photo */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className={`${style['post-photo-container']}`}>
                    <Carousel>
                        {renderPhotoList()}
                    </Carousel>
                </div>
            </div>
            <hr style={{ width: '95%' }} />

            {/* Like and comment quantity */}
            <div className={`${style['like-container']}`}>
                <img height={18} width={18}
                    src={likeIcon}
                    alt="like"
                    style={{ cursor: 'pointer' }}
                    onClick={handleLikePost}
                />
                <span className={`${style['likes-quantity']}`}>
                    {totalLikes}
                </span>
                <span className={`${style['comment-quantity']}`}>
                    {post.totalComment} Comments
                </span>
            </div>
            <hr style={{ width: '95%' }} />
        </Fragment>
    )
}