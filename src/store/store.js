import {createStore,combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { businessReducer } from '../reducers/businessReducer';
import { customReducer } from '../reducers/customReducer';
import { userReducer } from '../reducers/userReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    custom: customReducer,
    user : userReducer,
    business : businessReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)