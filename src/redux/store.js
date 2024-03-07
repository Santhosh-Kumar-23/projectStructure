import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk, {withExtraArgument} from 'redux-thunk';
import rootReducer from './rootReducer';

const middleware = applyMiddleware(logger, withExtraArgument(thunk));

const store = createStore(rootReducer, middleware);

export default store;
