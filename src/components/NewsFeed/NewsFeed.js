import style from './NewsFeed.module.css';
import PostBody from '../PostBody/PostBody';
import PostFooter from '../PostFooter/PostFooter';
import PostHeader from "../PostHeader/PostHeader";

export default function NewsFeed() {
    const posts = [
        {
            avatar: "./image/avatar/default_avatar.png",
            firstName: "Như",
            lastName: "Trịnh",
            createdAt: "2022/03/24 00:18",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames. Sit amet venenatis urna cursus eget nunc scelerisque. Odio tempor orci dapibus ultrices. Aliquet lectus proin nibh nisl condimentum id. Aliquam etiam erat velit scelerisque in dictum. Amet justo donec enim diam vulputate ut pharetra sit. Sit amet venenatis urna cursus eget. Nunc sed id semper risus in hendrerit. Pellentesque habitant morbi tristique senectus et netus et. Feugiat pretium nibh ipsum consequat.",
            photo: ["https://static.appvn.com/a/uploads/thumbnails/112015/mr-square_icon.png"],
            likes: 1,
            totalComment: 2,
            commentList: [
                {
                    avatar: "./image/avatar/default_avatar.png",
                    firstName: "Thoại",
                    lastName: "Nguyễn",
                    content: "Được rồi đi thôi!",
                    createdAt: "2022-03-26 18:00"
                },
                {
                    avatar: "./image/avatar/default_avatar.png",
                    firstName: "Như",
                    lastName: "Trịnh",
                    content: "Okeokeoke",
                    createdAt: "2022-03-26 18:25"
                }
            ]
        },
    ];

    //Render menu items
    const renderPostList = () => {
        return posts.map((post, index) => (
            <div key={index} className={`${style['post-container']}`}>
                <PostHeader post={post} />
                <PostBody post={post} />
                <PostFooter post={post} />
            </div>
        ))
    }

    return (
        <div className={`${style['news-feed-container']}`}>
            {renderPostList()}
        </div>
    )
}