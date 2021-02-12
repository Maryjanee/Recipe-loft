import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;
