import { useDispatch, useSelector } from 'react-redux';
import style from './ConfirmDelete.module.css';
import { hideConfirmDeleteModalAction } from '../../redux/actions/ConfirmDeleteAction';

export default function ConfirmDelete(props) {
    const dispatch = useDispatch();
    const { title, content, handleDelete } = props;

    //Get state from reducers
    const { isConfirmDeleteModalVisible } = useSelector(state => state.ConfirmDeleteReducer);

    return (
        <div> {isConfirmDeleteModalVisible && (
            <div className={`${style['modal']}`}>
                <div className={`${style['modal-dialog']}`}>
                    {/* Header */}
                    <div className={`${style['modal-dialog-header']}`}>
                        <div className={`${style['modal-dialog-title']}`}>
                            {title}
                        </div>
                        <div
                            className={`${style['modal-dialog-close-btn']}`}
                            onClick={() => { dispatch(hideConfirmDeleteModalAction()) }}>
                            ✕
                        </div>
                    </div>
                    <hr />

                    {/* Body */}
                    <div className={`${style['modal-dialog-body']}`}>
                        {content}
                    </div>

                    {/* Footer */}
                    <div className={`${style['modal-dialog-footer']}`}>
                        <div
                            className={`${style['no-btn']}`}
                            onClick={() => { dispatch(hideConfirmDeleteModalAction()) }}
                        >
                            No
                        </div>
                        <div
                            className={`${style['delete-btn']}`}
                            onClick={handleDelete}
                        >
                            Delete
                        </div>
                    </div>
                </div>
            </div>
        )}
        </div>
    )
}