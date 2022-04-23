import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { AWS_S3_BUCKET_LINK } from '../../util/constants/systemSettings';
import Search from '../Search/Search';
import style from './FriendList.module.css';

export default function FriendList() {
    const friendList = useSelector(state => state.ProfileReducer).userProfile.friendList;

    const renderFriendList = () => {
        return (
            friendList?.map((friend, index) => {
                return (
                    <div key={index} className={`${style['friendlist-item']}`}>
                        <img
                            src={friend.avatar ?
                                `${AWS_S3_BUCKET_LINK}/${friend.avatar}` : "./image/avatar/default_avatar.png"}
                            alt="avatar"
                            className={`${style['friendlist-item-avatar']}`}
                        />
                        <div className={`${style['friendlist-item-name']}`}>
                            {`${friend.firstName || ""} ${friend.lastName || ""}`}
                        </div>
                        {/* <div className={`${style['friendlist-options']}`}>
                            <img

                                height={15} width={15}
                                src="./image/icon/more-options.png"
                                alt="more-options"
                            />
                        </div> */}
                    </div>
                )
            })
        )
    }
    return (
        <Fragment>
            <div className={`${style['friendlist-title']}`}>Friends</div>
            <div className={`${style['friends-search-row']}`}>
                <Search />
            </div>
            <div className={`${style['friendlist-item-container']}`}>
                {renderFriendList()}
                {/* <div className={`${style['friendlist-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friendlist-item-avatar']}`}
                    />
                    <div className={`${style['friendlist-item-name']}`}>
                        Thoai
                    </div>
                    <div className={`${style['friendlist-options']}`}>
                        <img

                            height={15} width={15}
                            src="./image/icon/more-options.png"
                            alt="more-options"
                        />
                    </div>
                </div>
                <div className={`${style['friendlist-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friendlist-item-avatar']}`}
                    />
                    <div className={`${style['friendlist-item-name']}`}>
                        Thoai
                    </div>
                    <div className={`${style['friendlist-options']}`}>
                        <img

                            height={15} width={15}
                            src="./image/icon/more-options.png"
                            alt="more-options"
                        />
                    </div>
                </div>
                <div className={`${style['friendlist-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friendlist-item-avatar']}`}
                    />
                    <div className={`${style['friendlist-item-name']}`}>
                        Thoai
                    </div>
                    <div className={`${style['friendlist-options']}`}>
                        <img

                            height={15} width={15}
                            src="./image/icon/more-options.png"
                            alt="more-options"
                        />
                    </div>
                </div>
                <div className={`${style['friendlist-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friendlist-item-avatar']}`}
                    />
                    <div className={`${style['friendlist-item-name']}`}>
                        Thoai
                    </div>
                    <div className={`${style['friendlist-options']}`}>
                        <img

                            height={15} width={15}
                            src="./image/icon/more-options.png"
                            alt="more-options"
                        />
                    </div>
                </div>
                <div className={`${style['friendlist-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friendlist-item-avatar']}`}
                    />
                    <div className={`${style['friendlist-item-name']}`}>
                        Thoai
                    </div>
                    <div className={`${style['friendlist-options']}`}>
                        <img

                            height={15} width={15}
                            src="./image/icon/more-options.png"
                            alt="more-options"
                        />
                    </div>
                </div>
                <div className={`${style['friendlist-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friendlist-item-avatar']}`}
                    />
                    <div className={`${style['friendlist-item-name']}`}>
                        Thoai
                    </div>
                    <div className={`${style['friendlist-options']}`}>
                        <img

                            height={15} width={15}
                            src="./image/icon/more-options.png"
                            alt="more-options"
                        />
                    </div>
                </div>
                <div className={`${style['friendlist-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friendlist-item-avatar']}`}
                    />
                    <div className={`${style['friendlist-item-name']}`}>
                        Thoai
                    </div>
                    <div className={`${style['friendlist-options']}`}>
                        <img

                            height={15} width={15}
                            src="./image/icon/more-options.png"
                            alt="more-options"
                        />
                    </div>
                </div>
                <div className={`${style['friendlist-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friendlist-item-avatar']}`}
                    />
                    <div className={`${style['friendlist-item-name']}`}>
                        Thoai
                    </div>
                    <div className={`${style['friendlist-options']}`}>
                        <img

                            height={15} width={15}
                            src="./image/icon/more-options.png"
                            alt="more-options"
                        />
                    </div>
                </div>
                <div className={`${style['friendlist-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friendlist-item-avatar']}`}
                    />
                    <div className={`${style['friendlist-item-name']}`}>
                        Thoai
                    </div>
                    <div className={`${style['friendlist-options']}`}>
                        <img

                            height={15} width={15}
                            src="./image/icon/more-options.png"
                            alt="more-options"
                        />
                    </div>
                </div>
                <div className={`${style['friendlist-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friendlist-item-avatar']}`}
                    />
                    <div className={`${style['friendlist-item-name']}`}>
                        Thoai
                    </div>
                    <div className={`${style['friendlist-options']}`}>
                        <img

                            height={15} width={15}
                            src="./image/icon/more-options.png"
                            alt="more-options"
                        />
                    </div>
                </div>
                <div className={`${style['friendlist-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friendlist-item-avatar']}`}
                    />
                    <div className={`${style['friendlist-item-name']}`}>
                        Thoai
                    </div>
                    <div className={`${style['friendlist-options']}`}>
                        <img

                            height={15} width={15}
                            src="./image/icon/more-options.png"
                            alt="more-options"
                        />
                    </div>
                </div>
                <div className={`${style['friendlist-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friendlist-item-avatar']}`}
                    />
                    <div className={`${style['friendlist-item-name']}`}>
                        Thoai
                    </div>
                    <div className={`${style['friendlist-options']}`}>
                        <img

                            height={15} width={15}
                            src="./image/icon/more-options.png"
                            alt="more-options"
                        />
                    </div>
                </div>
                <div className={`${style['friendlist-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friendlist-item-avatar']}`}
                    />
                    <div className={`${style['friendlist-item-name']}`}>
                        Thoai
                    </div>
                    <div className={`${style['friendlist-options']}`}>
                        <img

                            height={15} width={15}
                            src="./image/icon/more-options.png"
                            alt="more-options"
                        />
                    </div>
                </div>
                <div className={`${style['friendlist-item']}`}>
                    <img src="./image/avatar/default_avatar.png"
                        alt="avatar"
                        className={`${style['friendlist-item-avatar']}`}
                    />
                    <div className={`${style['friendlist-item-name']}`}>
                        Thoai
                    </div>
                    <div className={`${style['friendlist-options']}`}>
                        <img

                            height={15} width={15}
                            src="./image/icon/more-options.png"
                            alt="more-options"
                        />
                    </div>
                </div> */}
            </div>
        </Fragment>
    )
}