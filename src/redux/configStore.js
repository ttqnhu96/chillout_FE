import { applyMiddleware, combineReducers, createStore } from 'redux';
import createMiddleWareSaga from 'redux-saga';
import { rootSaga } from './sagas/rootSaga';
import { ProfileReducer } from '../redux/reducers/ProfileReducer';
import { LoadingReducer } from '../redux/reducers/LoadingReducer';

//Create Saga middleware
const sagaMiddleWare = createMiddleWareSaga();

const rootReducer = combineReducers({
    ProfileReducer,
    LoadingReducer
})

//Inject Saga Middleware to Redux Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

//Run Saga
sagaMiddleWare.run(rootSaga);

export default store;
