import { Fragment, useEffect } from 'react';
import style from './Cover.module.css';
import { CameraOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { displayUploadImageModalAction } from '../../redux/actions/PhotoAction';
import UploadImageModal from '../UploadImageModal/UploadImageModal';

const menuItems = require('./coverMenuItems.json');
export default function Cover(props) {
    const dispatch = useDispatch();
    const { isUploadImageModalVisible } = useSelector(state => state.PhotoReducer);

    useEffect(() => {
        //Hide scrollbar when modal is opened
        document.body.style.overflow = isUploadImageModalVisible ? 'hidden' : 'unset';

    }, [isUploadImageModalVisible])

    const { activeMenuId, setActiveMenuId } = props;
    const menuItemCSS = `${style['cover-menu-item']}`;
    const activeMenuItemCSS = `${style['cover-menu-item-active']}`;

    //Render menu items
    const renderMenu = () => {
        return menuItems.map((menuItem, index) => (
            <div key={index}
                className={activeMenuId === menuItem.id ? activeMenuItemCSS : menuItemCSS}
                onClick={() => { setActiveMenuId(menuItem.id) }}
            >
                {menuItem.name}
            </div>
        ))
    }

    //Handle events
    const handleUploadAvatar = () => {
        dispatch(displayUploadImageModalAction())
    }
    return (
        <Fragment>
            {isUploadImageModalVisible && <UploadImageModal />}
            <div className={`${style['cover-avatar-container']}`}>
                <img
                    className={`${style['cover-avatar']}`}
                    src="./image/avatar/default_avatar.png"
                    alt="avatar"
                />
                <div className={`${style['cover-avatar']} ${style['upload-avatar-btn']}`}
                    onClick={handleUploadAvatar}>
                    <CameraOutlined />
                </div>
            </div>
            <div className={`${style['cover-user-name']}`}>
                Như Trịnh
                <hr style={{ width: '95%' }} />
                <div className={`${style['cover-menu-container']}`}>
                    {renderMenu()}
                </div>
            </div>
        </Fragment>
    )
}