import { useEffect, useState } from "react";
import Cover from "../../components/Cover/Cover";
import WallPosts from "../../components/WallPosts/WallPosts";
import Intro from "../../components/Intro/Intro";
import RecentContacts from "../../components/RecentContacts/RecentContacts";
import style from './Wall.module.css';
import FriendList from "../../components/FriendList/FriendList";

export default function Wall() {
    const [activeMenuId, setActiveMenuId] = useState(1);

    return (
        <div className={`${style['wall']}`}>
            <div className={`${style['wall-left']}`}>
                <Intro />
                <RecentContacts />
            </div>
            <div className={`${style['wall-right']}`}>
                <div className={`${style['wall-cover-container']}`}>
                    <Cover
                        activeMenuId={activeMenuId}
                        setActiveMenuId={setActiveMenuId} />
                </div>
                <div className={`${style['wall-content-container']}`}>
                    {activeMenuId === 1 && <WallPosts />}
                    {activeMenuId === 3 && <FriendList />}
                </div>
            </div>
        </div >
    )
}