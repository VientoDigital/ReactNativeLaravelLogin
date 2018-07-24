import { fromJS } from 'immutable'

import { 
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, 
    LOGOUT_REQUEST,
    USER_REQUEST, USER_SUCCESS, USER_FAILURE
} from '../Actions/Types'

const INIT_STATE = {
    id:-1,
    name:'',
    email:'',
    password:'',
    access_token:'',
    refresh_token:'',
    expires:null,
    loading:false,
    error:false
}

const auth = (state = fromJS(INIT_STATE), action) => {
    switch(action.type) {
        case LOGIN_REQUEST:
            return state.merge({
                email:action.payload.email,
                password:action.payload.password,
                created_at:action.payload.created_at,
                updated_at:action.payload.updated_at,
                loading: true,
                error: false
            })
        break
        case LOGIN_SUCCESS:
            console.log('payload',action.payload)
            return state.merge({
                access_token:action.payload.response.access_token,
                refresh_token:action.payload.response.refresh_token,
                expires:action.payload.response.expires,
                password:'',
                loading: false,
                error: false
            })
        break   
        case LOGIN_FAILURE:
            return state.merge(INIT_STATE).merge({error:true})
        break
        case USER_REQUEST:
            return state.merge({loading:true,error:false})
        break;
        case USER_SUCCESS:
            return state.merge(action.payload.response).merge({loading:false,error:false})
        break;
        case USER_FAILURE:
            return state.merge({loading:false,error:true})
        break
        case LOGOUT_REQUEST:
            return state.merge(INIT_STATE)
        break;
        default:
            return state
    }
}

export default auth
