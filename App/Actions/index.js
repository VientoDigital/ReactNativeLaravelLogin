import { LOGIN_URL } from '../Config/URLs'
import { OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRECT } from '../Config/Settings'
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST} from './Types'

export function loginFetch(email,password) {
    console.log(LOGIN_URL)
    return (dispatch) => {
        dispatch(loginRequest(email,password))
        return fetch(LOGIN_URL,{
            method:'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                grant_type:'password',
                client_id: OAUTH_CLIENT_ID,
                client_secret: OAUTH_CLIENT_SECRECT,
                username:email,
                password:password,
                scope:''
            })
        })
        .then(response => response.json())
        .then(json => {
            console.log('json',email,json)
            if(json.hasOwnProperty('error'))
                dispatch(loginFailure(email,json.message))
            else 
                dispatch(loginSuccess(email,json))
        })
        .catch((error) => {
            console.log('ERROR',error)
            dispatch(loginFailure(email,error))
        })
    }
}
export function loginRequest(email, password) {
    return {
        type:LOGIN_REQUEST,
        payload: { email, password}
    }
}
export function loginSuccess(email, response) {
    return {
        type: LOGIN_SUCCESS,
        payload: { email, response }
    }
}
export function loginFailure(email, response) {
    return {
        type: LOGIN_FAILURE,
        payload: { email, response }
    }
}

export function logout(){
    return {
        type: LOGOUT_REQUEST
    }
}
