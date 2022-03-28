import PostBody from "../PostBody/PostBody";
import PostFooter from "../PostFooter/PostFooter";
import PostHeader from "../PostHeader/PostHeader";
import style from './WallPosts.module.css';

export default function WallPosts() {
    const posts = [
        {
            avatar: "./image/avatar/default_avatar.png",
            firstName: "Như",
            lastName: "Trịnh",
            createdAt: "2022/03/24 00:18",
            content: "VỊ TRÍ : dàn hoa giấy cực xịn này nằm ở gần Paradise (Ngay khách sạn cao đường thuỳ vân có hẻm to đi vào .... cạnh hông khách sạn “LÂM ĐƯỜNG”) Ngoài ra địa điểm để chụp hoa giấy tại VT rất nhiều vì mùa này nở rộ, các bạn có thể đi dọc đường Phan Chu Trinh, Núi Lớn, đường Thùy Vân....... Toàn bộ ảnh mình chụp bằng cam Thường Sau đó chỉnh ảnh bằng Vsco và lightroom Thời gian chụp ảnh: Khung thời gian từ 8h30 - 9h30 sẽ cho ra những bức ảnh xịn xò nhất theo mình là vậy",
            photo: "https://images.unsplash.com/photo-1581881067989-7e3eaf45f4f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG8lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
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

    const renderPostList = () => {
        return posts.map((post, index) => (
            <div key={index} className={`${style['view-post-container']}`}>
                <PostHeader post={post} />
                <PostBody post={post} />
                <PostFooter post={post} />
            </div>
        ))
    }

    return (
        <div>
            {renderPostList()}
        </div>
    )
}