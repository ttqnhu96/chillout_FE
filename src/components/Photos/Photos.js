/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from 'react';
import style from './Photos.module.css';
import { DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { displayViewPhotoModalAction, getPhotoListByUserIdSagaAction, setDeletedPhotoIdAction } from '../../redux/actions/PhotoAction';
import ViewPhoto from '../ViewPhoto/ViewPhoto';
import { AWS_S3_BUCKET_LINK } from '../../util/constants/systemSettings';
import { displayConfirmDeleteModalAction, setModalTypeAction } from '../../redux/actions/ConfirmDeleteAction';
import { MODAL_TYPE } from '../../util/constants/commonConstants';

export default function Photos() {
    const dispatch = useDispatch();
    //Get state from reducer
    const currentUserId = useSelector(state => state.ProfileReducer).userProfile.id; //In case view logged in user profile
    const friendId = useSelector(state => state.ProfileReducer).friendProfile?.id; //In case view friend profile
    const { isViewFriendProfile } = useSelector(state => state.ProfileReducer);
    const { photoList } = useSelector(state => state.PhotoReducer);

    const { isViewPhotoModalVisible } = useSelector(state => state.PhotoReducer);

    useEffect(() => {
        //Hide scrollbar when modal is opened
        document.body.style.overflow = isViewPhotoModalVisible ? 'hidden' : 'unset';
        document.body.style.paddingRight = isViewPhotoModalVisible ? '0.6rem' : '0';
    }, [isViewPhotoModalVisible])

    //Local state
    const [requestToGetPhotoList, setRequestToGetPhotoList] = useState({
        userId: 0,
        isPaginated: false
    })

    //Set current user id
    useEffect(() => {
        let profileOwnerId = 0;
        if (isViewFriendProfile) {
            profileOwnerId = friendId;
        } else {
            profileOwnerId = currentUserId;
        }
        setRequestToGetPhotoList(prevState => ({
            ...prevState,
            userId: profileOwnerId
        }))
    }, [currentUserId, friendId])

    useEffect(() => {
        if (requestToGetPhotoList.userId) {
            dispatch(getPhotoListByUserIdSagaAction(requestToGetPhotoList))
        }
    }, [requestToGetPhotoList.userId])

    //Handle events
    const handleClickPhoto = (imageSrc) => {
        dispatch(displayViewPhotoModalAction(imageSrc))
    }
    const handleClickDeleteButton = (photoId) => {
        dispatch(displayConfirmDeleteModalAction());
        dispatch(setModalTypeAction(MODAL_TYPE.CONFIRM_DELETE_PHOTO));
        dispatch(setDeletedPhotoIdAction(photoId));
    }

    const renderPhotoList = () => {
        return (
            photoList.map((photo, index) => (
                <div key={index} className={`${style['photo-container']}`}>
                    <img
                        src={`${AWS_S3_BUCKET_LINK}/${photo.fileName}`}
                        alt={`photo_${index}`}
                        className={`${style['photo']}`}
                        onClick={() => handleClickPhoto(`${AWS_S3_BUCKET_LINK}/${photo.fileName}`)}
                    />
                    {
                        !isViewFriendProfile
                        &&
                        <div className={`${style['photo']} ${style['delete-button']}`}
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