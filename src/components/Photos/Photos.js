/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from 'react';
import style from './Photos.module.css';
import { DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { displayViewPhotoModalAction, getPhotoListByUserIdSagaAction } from '../../redux/actions/PhotoAction';
import ViewPhoto from '../ViewPhoto/ViewPhoto';
import { AWS_S3_BUCKET_LINK } from '../../util/constants/systemSettings';

export default function Photos() {
    const dispatch = useDispatch();
    //Get state from reducer
    const currentUserId = useSelector(state => state.ProfileReducer).userProfile.id;
    const { photoList } = useSelector(state => state.PhotoReducer);
    console.log('photoList', photoList)

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
        // pageIndex: 0,
        // pageSize: 10
    })

    //Set current user id
    useEffect(() => {
        setRequestToGetPhotoList(prevState => ({
            ...prevState,
            userId: currentUserId
        }))
    }, [currentUserId])

    useEffect(() => {
        if (requestToGetPhotoList.userId) {
            dispatch(getPhotoListByUserIdSagaAction(requestToGetPhotoList))
        }
    }, [requestToGetPhotoList])

    //Handle events
    const handleClickPhoto = (imageSrc) => {
        dispatch(displayViewPhotoModalAction(imageSrc))
    }

    const renderPhotoList = () => {
        return (
            photoList.map((photo, index) => (
                <div key={index} className={`${style['photo-container']}`}>
                    <img
                        src={`${AWS_S3_BUCKET_LINK}/${photo.fileName}`}
                        alt="avatar"
                        className={`${style['photo']}`}
                        onClick={() => handleClickPhoto(`${AWS_S3_BUCKET_LINK}/${photo.fileName}`)}
                    />
                    <div className={`${style['photo']} ${style['delete-button']}`}>
                        <DeleteOutlined />
                    </div>
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