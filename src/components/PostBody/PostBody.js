import { Fragment } from 'react';
import style from './PostBody.module.css';

export default function PostBody(props) {
    // const postsProps = [
    //     {
    //         avatar: "./image/avatar/default_avatar.png",
    //         firstName: "Như",
    //         lastName: "Trịnh",
    //         createdAt: "2022/03/24 00:18",
    //         content: "VỊ TRÍ : dàn hoa giấy cực xịn này nằm ở gần Paradise (Ngay khách sạn cao đường thuỳ vân có hẻm to đi vào .... cạnh hông khách sạn “LÂM ĐƯỜNG”) Ngoài ra địa điểm để chụp hoa giấy tại VT rất nhiều vì mùa này nở rộ, các bạn có thể đi dọc đường Phan Chu Trinh, Núi Lớn, đường Thùy Vân....... Toàn bộ ảnh mình chụp bằng cam Thường Sau đó chỉnh ảnh bằng Vsco và lightroom Thời gian chụp ảnh: Khung thời gian từ 8h30 - 9h30 sẽ cho ra những bức ảnh xịn xò nhất theo mình là vậy",
    //         photo: "https://images.unsplash.com/photo-1581881067989-7e3eaf45f4f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG8lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    //         likes: 1,
    //         totalComment: 2
    //     },
    // ];
    const { post } = props;

    return (
        <Fragment>
            {/* Content */}
            <div className={`${style['post-content-container']}`}>
                {post.content}
            </div>

            {/* Photo */}
            <div className={`${style['post-photo-container']}`}>
                <img
                    className={`${style['post-photo']}`}
                    src={post.photo}
                    alt="post_photo"
                />
            </div>
            <hr style={{ width: '95%' }} />

            {/* Like and comment quantity */}
            <div className={`${style['like-container']}`}>
                <img height={18} width={18}
                    src="./image/icon/like.png"
                    alt="like"
                />
                <span className={`${style['likes-quantity']}`}>
                    {post.likes}
                </span>
                <span className={`${style['comment-quantity']}`}>
                    {post.totalComment} Comments
                </span>
            </div>
            <hr style={{ width: '95%' }} />
        </Fragment>
    )
}