import { combineReducers } from 'redux'
// import items from './itemsReducers.js'
import subItemsReducers from './subItemsReducers.js'


export default combineReducers({
  // items,
  items: subItemsReducers
})