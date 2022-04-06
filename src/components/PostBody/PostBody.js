import { Carousel } from 'antd';
import { Fragment } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import style from './PostBody.module.css';
import { AWS_S3_BUCKET_LINK } from '../../util/constants/systemSettings';

export default function PostBody(props) {
    const { post } = props;

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
                    <Carousel nextArrow={<ArrowRightOutlined />} prevArrow={<ArrowLeftOutlined/>}>
                        {renderPhotoList()}
                    </Carousel>
                </div>
            </div>
            <hr style={{ width: '95%' }} />

            {/* Like and comment quantity */}
            <div className={`${style['like-container']}`}>
                <img height={18} width={18}
                    src="./image/icon/like.png"
                    alt="like"
                />
                <span className={`${style['likes-quantity']}`}>
                    {post.likes}
                </span>
                <span className={`${style['comment-quantity']}`}>
                    {post.totalComment} Comments
                </span>
            </div>
            <hr style={{ width: '95%' }} />
        </Fragment>
    )
}