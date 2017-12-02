import { connect } from 'react-redux'
import Login from '../Components/LoginScreen'
import {loginFetch, logout, userFetch} from '../Actions'

const mapStateToProps = (state) => {
    // console.log(state.auth)
    return {auth:state.auth.toJS()}
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        onLogin: (props) => {
            dispatch(loginFetch(props.email, props.password))
        },
        onLogout: () => {
            dispatch(logout())
        },
        onUser: (auth) => {
            dispatch(userFetch(auth))
        }

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Login)