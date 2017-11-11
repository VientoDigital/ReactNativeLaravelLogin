import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import auth from './AuthReducer'

const rootReducer = combineReducers({
    auth,
    form:formReducer
})

export default rootReducer