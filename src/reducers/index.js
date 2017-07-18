import { combineReducers } from 'redux';
import mainItemsReducers from './mainItemsReducers.js';
import toDoReducer from './toDoReducer.js';

export default combineReducers({ 
    data : mainItemsReducers,
    todo : toDoReducer
})