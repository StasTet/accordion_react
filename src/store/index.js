import { createStore , applyMiddleware} from 'redux'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk, logger)));
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  if (module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(reducers))
  }

  return store;
}