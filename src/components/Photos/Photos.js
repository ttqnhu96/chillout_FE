import { Fragment, useEffect } from 'react';
import style from './Photos.module.css';
import { DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { displayViewPhotoModalAction } from '../../redux/actions/PhotoAction';
import ViewPhoto from '../ViewPhoto/ViewPhoto';

export default function Photos() {
    const dispatch = useDispatch();

    const { isViewPhotoModalVisible } = useSelector(state => state.PhotoReducer);

    useEffect(() => {
        //Hide scrollbar when modal is opened
        document.body.style.overflow = isViewPhotoModalVisible ? 'hidden' : 'unset';

    }, [isViewPhotoModalVisible])

    //Handle events
    const handleClickPhoto = (imageSrc) => {
        dispatch(displayViewPhotoModalAction(imageSrc))
    }

    return (
        <Fragment>
            {isViewPhotoModalVisible && <ViewPhoto />}
            <div className={`${style['title']}`}>Photos</div>
            <div className={`${style['photo-list-container']}`}>
                <div className={`${style['photo-container']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['photo']}`}
                        // onClick={handleClickPhoto("./image/avatar/default_avatar.png")}
                        onClick={() => handleClickPhoto("./image/avatar/default_avatar.png")}
                    />
                    <div className={`${style['photo']} ${style['delete-button']}`}>
                        <DeleteOutlined />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}