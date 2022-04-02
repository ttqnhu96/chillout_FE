import { useDispatch, useSelector } from 'react-redux';
import style from './UploadImageModal.module.css';
import { hideUploadImageModalAction } from '../../redux/actions/PhotoAction';
import CropAndUploadImg from '../CropAndUploadImg/CropAndUploadImg';

export default function UploadImageModal() {

    const dispatch = useDispatch();

    //Get state from reducers
    const { isUploadImageModalVisible } = useSelector(state => state.PhotoReducer);

    const maxFileLength = 1;

    return (
        <div> {isUploadImageModalVisible && (
            <div className={`${style['upload-image-modal']}`}>
                <div className={`${style['upload-image-modal-dialog']}`}>
                    {/* Header */}
                    <div className={`${style['upload-image-modal-dialog-header']}`}>
                        <div className={`${style['upload-image-modal-dialog-title']}`}>
                            Upload profile picture
                        </div>
                        <div
                            className={`${style['upload-image-modal-close-btn']}`}
                            onClick={() => { dispatch(hideUploadImageModalAction()) }}>
                            ✕
                        </div>
                    </div>
                    <hr />

                    {/* Body */}
                    <div className={`${style['upload-image-modal-dialog-body']}`}>
                        <CropAndUploadImg maxFileLength={maxFileLength} />
                    </div>

                    {/* Footer */}
                    <div className={`${style['upload-image-modal-dialog-footer']}`}>
                            <div
                                className={`${style['upload-image-btn']}`}
                                onClick={() => { }}
                            >
                                Save
                            </div>
                        </div>
                </div>
            </div>
        )}
        </div>
    )
}