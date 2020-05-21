import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { postsReducer } from './reducers/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(postsReducer, composeWithDevTools(applyMiddleware(thunk)));
console.log(store.getState());
