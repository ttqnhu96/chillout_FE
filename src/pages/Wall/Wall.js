import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreatePost from "../../components/CreatePost/CreatePost";
import { displayCreatePostModalAction } from "../../redux/actions/PostAction";

export default function Wall() {
    const dispatch = useDispatch();
    useEffect(() => {
        //Hide scrollbar when sign up modal is opened
        document.body.style.overflow = isCreatePostModalVisible ? 'hidden' : 'unset';
    })

    const handleClickCreatePost = () => {
        dispatch(displayCreatePostModalAction())
    }
    
    //Get state from reducers
    const { isCreatePostModalVisible } = useSelector(state => state.PostReducer);
    
    return (
        <div>
            <button onClick={handleClickCreatePost}>+</button>
            {isCreatePostModalVisible && <CreatePost />}
        </div>
    )
}