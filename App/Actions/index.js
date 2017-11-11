import { LOGIN_URL } from '../Config/URLs'
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from './Types'

export function loginFetch(username,password) {
    console.log(LOGIN_URL)
    return (dispatch) => {
        dispatch(loginRequest(username,password))
        return fetch(LOGIN_URL,{
            method:'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                grant_type:'password',
                client_id:1,
                client_secret:'V0PqkYiGdcURa5NAJvLnKqfkhgWmJz7k8teweiIe',
                username:username,
                password:password,
                scope:''
            })
        })
        .then(response => response.json())
        .then(json => {
            console.log('json',username,json)
            if(json.hasOwnProperty('error'))
                dispatch(loginFailure(username,json.message))
            else 
                dispatch(loginSuccess(username,json))
        })
        .catch((error) => {
            console.log('ERROR',error)
            dispatch(loginFailure(username,error))
        })
    }
}
export function loginRequest(username, password) {
    return {
        type:LOGIN_REQUEST,
        payload: { username, password}
    }
}
export function loginSuccess(username, json) {
    return {
        type: LOGIN_SUCCESS,
        payload: { username, json }
    }
}
export function loginFailure(username, json) {
    return {
        type: LOGIN_FAILURE,
        payload: { username }
    }
}
