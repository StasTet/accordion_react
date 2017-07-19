import { combineReducers } from 'redux';
import leftMenuReducers from './leftMenuReducers.js';
import toDoReducer from './toDoReducer.js';
import sliderReducer from './sliderReducer.js';

export default combineReducers({ 
    leftMenu : leftMenuReducers,
    toDo : toDoReducer,
    slider : sliderReducer
})