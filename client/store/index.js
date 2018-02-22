import {createStore, combineReducers, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './user';
import word from './word';
import dictionary from './dictionary';
import game from './game';
import newDictionary from './newDictionary'

const reducer = combineReducers({user, dictionary, word, game, newDictionary})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store;
export * from './user';
export * from './word';
export * from './dictionary';
export * from './game';
export * from './newDictionary';
