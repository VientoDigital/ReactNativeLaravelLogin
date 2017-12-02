import { connect } from 'react-redux'
import Login from '../Components/LoginScreen'
import {loginFetch} from '../Actions'

const mapStateToProps = (state) => {
    // console.log(state.auth)
    return {auth:state.auth.toJS()}
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        onLogin: (props) => {
            // console.log('onLogin props',props)
            dispatch(loginFetch(props.username, props.password))
        }

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Login)