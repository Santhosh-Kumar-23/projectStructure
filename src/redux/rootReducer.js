import { combineReducers } from "redux"
import AppReducer from "./reducers/appReducer"
import OtherReducer from "./reducers/otherReducer"
import * as ReduxTypes from "./rootTypes"

const rootReducers = combineReducers({
  app: AppReducer,
  other: OtherReducer
})

function rootReducer(state, action) {
  ReduxTypes.LOGOUT == action.type && [(state = {})]

  return rootReducers(state, action)
}

export default rootReducer
