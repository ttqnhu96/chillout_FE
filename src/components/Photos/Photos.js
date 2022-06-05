/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect } from 'react';
import style from './Photos.module.css';
import { DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { displayViewPhotoModalAction, getPhotoListByUserIdSagaAction, setDeletedPhotoIdAction } from '../../redux/actions/PhotoAction';
import ViewPhoto from '../ViewPhoto/ViewPhoto';
import { USER_LOGIN } from '../../util/constants/systemSettings';
import { displayConfirmDeleteModalAction, setModalTypeAction } from '../../redux/actions/ConfirmDeleteAction';
import { MODAL_TYPE } from '../../util/constants/commonConstants';

export default function Photos() {
    const loginUserId = JSON.parse(sessionStorage.getItem(USER_LOGIN))?.id;
    const dispatch = useDispatch();

    //State from reducer
    const { userId } = useSelector(state => state.ProfileReducer).userProfile;
    const { photoList } = useSelector(state => state.PhotoReducer);
    const { isViewPhotoModalVisible } = useSelector(state => state.PhotoReducer);


    //Use effect
    useEffect(() => {
        //Hide scrollbar when modal is opened
        document.body.style.overflow = isViewPhotoModalVisible ? 'hidden' : 'unset';
        document.body.style.paddingRight = isViewPhotoModalVisible ? '0.6rem' : '0';
    }, [isViewPhotoModalVisible])

    useEffect(() => {
        if (userId) {
            dispatch(getPhotoListByUserIdSagaAction({
                userId: userId,
                isPaginated: false
            }))
        }
    }, [userId])


    //Handle events
    const handleClickPhoto = (imageSrc) => {
        dispatch(displayViewPhotoModalAction(imageSrc))
    }
    const handleClickDeleteButton = (photoId) => {
        dispatch(displayConfirmDeleteModalAction());
        dispatch(setModalTypeAction(MODAL_TYPE.CONFIRM_DELETE_PHOTO));
        dispatch(setDeletedPhotoIdAction(photoId));
    }


    //Function
    const renderPhotoList = () => {
        return (
            photoList.map((photo, index) => (
                <div key={index} className={`${style['photo-container']}`}>
                    <img
                        src={photo.fileName}
                        alt={`photo_${index}`}
                        className={`${style['photo']}`}
                        onClick={() => handleClickPhoto(photo.fileName)}
                    />
                    {
                        (userId === loginUserId)
                        &&
                        <div className={`${style['delete-button']}`}
                            onClick={() => { handleClickDeleteButton(photo.id) }}>
                            <DeleteOutlined />
                        </div>
                    }
                </div>
            )
            )
        )
    }

    return (
        <Fragment>
            {isViewPhotoModalVisible && <ViewPhoto />}
            <div className={`${style['title']}`}>Photos</div>
            <div className={`${style['photo-list-container']}`}>
                {renderPhotoList()}
            </div>
        </Fragment>
    )
}