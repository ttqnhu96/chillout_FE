import { useDispatch, useSelector } from 'react-redux';
import style from './ViewPhoto.module.css';
import { hideViewPhotoModalAction } from '../../redux/actions/PhotoAction';

export default function ViewPhoto() {

    const dispatch = useDispatch();

    //Get state from reducers
    const { isViewPhotoModalVisible, imageSrc } = useSelector(state => state.PhotoReducer);

    return (
        <div> {isViewPhotoModalVisible && (
            <div className={`${style['view-photo-modal']}`}>
                <div className={`${style['view-photo-modal-dialog']}`}>
                    {/* Header */}
                    <div className={`${style['view-photo-modal-dialog-header']}`}>
                        <div
                            className={`${style['view-photo-modal-dialog-close-btn']}`}
                            onClick={() => { dispatch(hideViewPhotoModalAction()) }}>
                            ✕
                        </div>
                    </div>

                    {/* Body */}
                    <div className={`${style['view-photo-modal-dialog-body']}`}>
                        <img
                            src={imageSrc}
                            alt="view_photo"
                            className={`${style['view-photo-image']}`} />
                    </div>
                </div>
            </div>
        )}
        </div>
    )
}