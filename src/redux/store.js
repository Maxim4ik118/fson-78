import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

import { postDetailsReducer } from './postDetailsReducer';

const rootReducer = combineReducers({
  postDetails: postDetailsReducer
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);