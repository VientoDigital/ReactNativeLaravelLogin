import { fromJS } from 'immutable'

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../Actions/Types'

const INIT_STATE = {
    id:-1,
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    email:'',
    access_token:'',
    refresh_token:'',
    expires_in:'',
    loading:false,
    error:false
}

const auth = (state = fromJS(INIT_STATE), action) => {
    switch(action.type) {
        case LOGIN_REQUEST:
            return state.merge({
                username:action.payload.username, 
                password:action.payload.password,
                loading: true,
                error: false
            })
        break
        case LOGIN_SUCCESS:
            console.log(action.payload)
            return state.merge({
                access_token:action.payload.json.access_token,
                refresh_token: action.payload.json.refresh_token,
                password:'',
                loading: false,
                error: false
            })
        break   
        case LOGIN_FAILURE:
            return state.merge({
                access_token:'',
                refresh_token:'',
                password:'',
                error: true
            })
        break
        default:
            return state
    }
}

export default auth