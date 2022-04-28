import TextArea from 'antd/lib/input/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import style from './CreatePost.module.css';
import { hideCreatePostModalAction, createPostSagaAction } from '../../redux/actions/PostAction';
import CropAndUploadImg from '../CropAndUploadImg/CropAndUploadImg';
import { AWS_S3_BUCKET_LINK, USER_LOGIN } from '../../util/constants/systemSettings';

export default function CreatePost() {
    const dispatch = useDispatch();

    const loginUserId = JSON.parse(sessionStorage.getItem(USER_LOGIN))?.id;
    const { avatar, firstName, lastName } = useSelector(state => state.ProfileReducer).loginUserProfile;

    //Get state from reducers
    const { isCreatePostModalVisible } = useSelector(state => state.PostReducer);

    //Local state
    const [post, setPost] = useState(
        {
            content: "",
            privacySettingId: "Public",
            photoList: []
        }
    )

    const [photoListUpload, setPhotoListUpload] = useState([]);

    const handleChangeValue = (e) => {
        const { name, value } = e.target;
        setPost(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleCreatePost = () => {
        dispatch(createPostSagaAction(loginUserId, photoListUpload, post))
    }

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
                                src={avatar ?
                                    `${AWS_S3_BUCKET_LINK}/${avatar}` : "/image/avatar/default_avatar.png"}
                                alt="avatar"
                            />
                            <div className={`${style['user-name-privacy-container']}`}>
                                <div className={`${style['user-name']}`}>
                                    {`${firstName || ""} ${lastName || ""}`}
                                </div>
                                <select className={`${style['privacy-select-box']}`}
                                    onChange={handleChangeValue}
                                    name="privacySettingId"
                                    value={post.privacySettingId}>
                                    <option>Public</option>
                                    <option>Only me</option>
                                </select>
                            </div>
                        </div>
                        <div className={`${style['post-content-container']}`}>
                            <TextArea
                                name="content"
                                value={post.content}
                                maxLength={10000}
                                className={`${style['post-content-text-area']}`}
                                placeholder="What's on your mind?"
                                autoSize={{ minRows: 4 }}
                                onChange={handleChangeValue}
                            />
                            <CropAndUploadImg maxFileLength={maxFileLength} setPhotoListUpload={setPhotoListUpload} />
                        </div>

                        {/* Footer */}
                        <div className={`${style['create-post-modal-dialog-footer']}`}>
                            <div
                                className={`${style['create-post-btn']}`}
                                onClick={handleCreatePost}
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