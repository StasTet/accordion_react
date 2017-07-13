import { combineReducers } from 'redux'
import mainItemsReducers from './mainItemsReducers.js'
// import subItemsReducers from './subItemsReducers.js'


export default combineReducers({
  items : mainItemsReducers,
  // subItems: subItemsReducers
})