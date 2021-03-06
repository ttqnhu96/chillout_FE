import { applyMiddleware, combineReducers, createStore } from 'redux';
import createMiddleWareSaga from 'redux-saga';
import { rootSaga } from './sagas/rootSaga';
import { ProfileReducer } from '../redux/reducers/ProfileReducer';
import { SignUpReducer } from '../redux/reducers/SignUpReducer';
import { PostReducer } from '../redux/reducers/PostReducer';
import { PhotoReducer } from '../redux/reducers/PhotoReducer';
import { CityReducer } from '../redux/reducers/CityReducer';
import { WorkplaceReducer } from '../redux/reducers/WorkplaceReducer';
import { SchoolReducer } from '../redux/reducers/SchoolReducer';
import { CollegeReducer } from '../redux/reducers/CollegeReducer';
import { CommentReducer } from '../redux/reducers/CommentReducer';
import { LoadingReducer } from '../redux/reducers/LoadingReducer';
import { MessageReducer } from './reducers/MessageReducer';
import { ConfirmDeleteReducer } from '../redux/reducers/ConfirmDeleteReducer';
import { RelationshipReducer } from '../redux/reducers/RelationshipReducer';
import { NotificationReducer } from '../redux/reducers/NotificationReducer';

//Create Saga middleware
const sagaMiddleWare = createMiddleWareSaga();

const rootReducer = combineReducers({
    ProfileReducer,
    MessageReducer,
    CommentReducer,
    SignUpReducer,
    PostReducer,
    PhotoReducer,
    CityReducer,
    WorkplaceReducer,
    SchoolReducer,
    CollegeReducer,
    LoadingReducer,
    ConfirmDeleteReducer,
    RelationshipReducer,
    NotificationReducer
})

//Inject Saga Middleware to Redux Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

//Run Saga
sagaMiddleWare.run(rootSaga, store.dispatch);

export default store;
