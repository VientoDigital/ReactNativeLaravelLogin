import { LOGIN_URL, USER_URL } from '../Config/URLs'
import { OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRECT } from '../Config/Settings'
import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, 
    LOGOUT_REQUEST,
    USER_REQUEST, USER_SUCCESS, USER_FAILURE
} from './Types'


export function userFetch(auth) {
    return (dispatch) => {
        console.log('auth',auth)
        dispatch(userRequest(auth))
        return fetch(USER_URL,{
            method:'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Accept' :'application/json',
                'Authorization' : 'Bearer '+auth.access_token
            }
        })
        .then(response => response.json())
        .then(json => {
            console.log('JSON',json)
            if(json.hasOwnProperty('error'))
                dispatch(userFailure(auth,json.message))
            else 
                dispatch(userSuccess(auth,json))
        })
        .catch((error) => {
            console.log('ERROR',error)
            dispatch(userFailure(auth,error))
        })
    }
}
export function userRequest(auth) {
    return {
        type:USER_REQUEST,
        payload: auth
    }
}
export function userSuccess(auth, response){
    return {
        type:USER_SUCCESS,
        payload: { response }
    }
}
export function userFailure(auth, error){
    return {
        type:USER_FAILURE,
        payload: { auth, error}
    }
}

export function loginFetch(email,password) {
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
