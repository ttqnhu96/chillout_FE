import { applyMiddleware, combineReducers, createStore } from 'redux';
import createMiddleWareSaga from 'redux-saga';
import { rootSaga } from './sagas/rootSaga';
import { ProfileReducer } from '../redux/reducers/ProfileReducer';
import { SignUpReducer } from '../redux/reducers/SignUpReducer';
import { PostReducer } from '../redux/reducers/PostReducer';
import { MenuReducer } from '../redux/reducers/MenuReducer';
import { PhotoReducer } from '../redux/reducers/PhotoReducer';
import { CityReducer } from '../redux/reducers/CityReducer';
import { WorkplaceReducer } from '../redux/reducers/WorkplaceReducer';
import { SchoolReducer } from '../redux/reducers/SchoolReducer';
import { CollegeReducer } from '../redux/reducers/CollegeReducer';
import { CommentReducer } from '../redux/reducers/CommentReducer';
import { LoadingReducer } from '../redux/reducers/LoadingReducer';
import { ConfirmDeleteReducer } from '../redux/reducers/ConfirmDeleteReducer';

//Create Saga middleware
const sagaMiddleWare = createMiddleWareSaga();

const rootReducer = combineReducers({
    ProfileReducer,
    SignUpReducer,
    PostReducer,
    MenuReducer,
    PhotoReducer,
    CityReducer,
    WorkplaceReducer,
    SchoolReducer,
    CollegeReducer,
    LoadingReducer,
    CommentReducer,
    ConfirmDeleteReducer
})

//Inject Saga Middleware to Redux Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

//Run Saga
sagaMiddleWare.run(rootSaga);

export default store;
