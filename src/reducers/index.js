import { combineReducers } from 'redux'
import reducer from './mainItemsReducers.js'

export default combineReducers( { data : reducer } )