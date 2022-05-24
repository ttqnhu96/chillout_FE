import { all } from "redux-saga/effects";
import * as CitySaga from './CitySaga';
import * as WorkplaceSaga from './WorkplaceSaga';
import * as SchoolSaga from './SchoolSaga';
import * as CollegeSaga from './CollegeSaga';
import * as MessageSaga from './MessageSaga';
import * as CommentSaga from './CommentSaga';
import * as ReactPostSaga from './LikePostSaga';
import * as SocketSaga from "./SocketSaga";
import * as PostSaga from './PostSaga';
import * as AuthenticationSaga from "./AuthenticationSaga";
import * as ProfileSaga from "./ProfileSaga";
import * as PhotoSaga from './PhotoSaga';
import * as RelationshipSaga from './RelationshipSaga';
import * as NotificationSaga from './NotificationSaga';

export function* rootSaga(dispatch) {
        yield all([
                //Socket
                SocketSaga.newMessageSocketWatcher(),
                SocketSaga.reactPostWatcher(),
                SocketSaga.addCommentToPostWatcher(),
                SocketSaga.updateCommentToPostWatcher(),
                SocketSaga.socketInitWatcher(dispatch),
                SocketSaga.addFriendWatcher(),
                SocketSaga.acceptFriendRequestWatcher(),
                SocketSaga.cancelFriendRequestWatcher(),
                SocketSaga.deleteFriendRequestWatcher(),
                MessageSaga.receiveMessageWatcher(),
                ReactPostSaga.receiveLikePostWatcher(),
                //Authen
                AuthenticationSaga.signUpWatcher(),
                AuthenticationSaga.logInWatcher(),

                //Profile
                ProfileSaga.getLogInUserProfileWatcher(),
                ProfileSaga.getProfileDetailByUserIdWatcher(),
                ProfileSaga.updateProfileWatcher(),
                ProfileSaga.updateAvatarWatcher(),

                //City
                CitySaga.getCityListWatcher(),

                //Workplace
                WorkplaceSaga.getWorkplaceListWatcher(),

                //School
                SchoolSaga.getSchoolListWatcher(),

                //College
                CollegeSaga.getCollegeListWatcher(),

                //Post
                PostSaga.createPostWatcher(),
                PostSaga.getPostListWallWatcher(),
                PostSaga.getPostListNewsFeedWatcher(),
                PostSaga.updateLikesWatcher(),

                //Photo
                PhotoSaga.getPhotoListByUserIdWatcher(),
                PhotoSaga.deletePhotoWatcher(),

                //Comment
                CommentSaga.getCommentListByPostIdWatcher(),
                CommentSaga.createCommentWatcher(),
                CommentSaga.deleteCommentWatcher(),
                CommentSaga.updateCommentWatcher(),
                CommentSaga.handleAddCommentBySocketWatcher(),
                CommentSaga.handleUpdateCommentBySocketWatcher(),

                //Relationship
                RelationshipSaga.getSuggestionsListWatcher(),
                RelationshipSaga.getFriendListWatcher(),
                RelationshipSaga.getReceivedFriendRequestListWatcher(),
                RelationshipSaga.acceptFriendRequestWatcher(),
                RelationshipSaga.deleteFriendRequestWatcher(),
                RelationshipSaga.cancelFriendRequestWatcher(),
                RelationshipSaga.createFriendRequestWatcher(),
                RelationshipSaga.getRelationshipWithCurrentUserWatcher(),
                RelationshipSaga.handleAddFriendNotifyBySocketWatcher(),
                RelationshipSaga.handleCancelFriendRequestNotifyBySocketWatcher(),
                RelationshipSaga.handleDeleteFriendRequestNotifyBySocketWatcher(),
                RelationshipSaga.handleAcceptFriendNotifyBySocketWatcher(),

                //Notification
                NotificationSaga.createNotificationWatcher(),
                NotificationSaga.getNotificationListByReceiverIdWatcher()
        ])
}