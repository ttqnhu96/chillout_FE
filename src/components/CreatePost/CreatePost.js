import TextArea from 'antd/lib/input/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import style from './CreatePost.module.css';
import { hideCreatePostModalAction } from '../../redux/actions/PostAction';
import CropAndUploadImg from '../CropAndUploadImg/CropAndUploadImg';

export default function CreatePost() {

    const dispatch = useDispatch();

    //Get state from reducers
    const { isCreatePostModalVisible } = useSelector(state => state.PostReducer);

    const maxFileLength = 10;

    return (
        <div> {isCreatePostModalVisible && (
            <div className={`${style['create-post-modal']}`}>
                <div className={`${style['create-post-modal-dialog']}`}>
                    {/* Header */}
                    <div className={`${style['create-post-modal-dialog-header']}`}>
                        <div className={`${style['create-post-modal-dialog-title']}`}>
                            Create Post
                        </div>
                        <div
                            className={`${style['create-post-modal-dialog-close-btn']}`}
                            onClick={() => { dispatch(hideCreatePostModalAction()) }}>
                            ✕
                        </div>
                    </div>
                    <hr />

                    {/* Body */}
                    <div className={`${style['create-post-modal-dialog-body']}`}>
                        <div className={`${style['create-post-user-container']}`}>
                            <img
                                className={`${style['create-post-user-avatar']}`}
                                src="./image/avatar/default_avatar.png"
                                alt="avatar"
                            />
                            <div className={`${style['user-name-privacy-container']}`}>
                                <div className={`${style['user-name']}`}>
                                    Như Trịnh
                                </div>
                                <select className={`${style['privacy-select-box']}`}>
                                    <option>Only me</option>
                                    <option>Public</option>
                                    <option>Followers</option>
                                </select>
                            </div>
                        </div>
                        <div className={`${style['post-content-container']}`}>
                        <TextArea
                            maxLength={10000}
                            className={`${style['post-content-text-area']}`}
                            placeholder="What's on your mind?"
                            autoSize={{ minRows: 4 }}
                            onChange={() => { }}
                            onPressEnter={(e) => { console.log(e.target.value) }}
                        />
                        <CropAndUploadImg maxFileLength={maxFileLength} />
                        </div>

                        {/* Footer */}
                        <div className={`${style['create-post-modal-dialog-footer']}`}>
                            <div
                                className={`${style['create-post-btn']}`}
                                onClick={() => { }}
                            >
                                Post
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </div>
    )
}