import { Carousel } from 'antd';
import { Fragment, memo } from 'react';
import style from './PostPhotoLists.module.css';

function PostPhotoLists(props) {
    const { photoList } = props;

    const renderPhotoList = () => {
        return (
            photoList.map((photo, index) => (
                <div key={index}>
                    <img
                        className={`${style['post-photo']}`}
                        src={photo.fileName}
                        alt="post_photo"
                    />
                </div>
            ))
        )
    }

    return (
        <Fragment>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className={`${style['post-photo-container']}`}>
                    <Carousel>
                        {renderPhotoList()}
                    </Carousel>
                </div>
            </div>
            <hr style={{ width: '95%' }} />
        </Fragment>
    )
}

export default memo(PostPhotoLists);