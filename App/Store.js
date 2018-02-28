import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { autoRehydrate } from 'redux-persist'
import createActionBuffer from 'redux-action-buffer'
import {REHYDRATE} from 'redux-persist/constants'
import reducers from './Reducers'

let middlewares = [thunk, createActionBuffer(REHYDRATE)]
if (__DEV__ === true) {
  middlewares.push(createLogger());
}

const store = createStore(
  reducers,
  undefined,
  compose(applyMiddleware(...middlewares), autoRehydrate()),
)

export default store
