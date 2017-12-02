import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
import TInput from './TInput'

class LoginScreen extends Component {
    constructor(props){
        super(props)
        // console.log('LOGIN_SCREEN_PROPS',props)
    }
    render(){
        let { onLogin, auth } = this.props
        return (
            <View style={styles.container}>
                <Field style={styles.input} autoCapitalize="none" placeholder="Username" component={TInput} name={'username'} />
                <Field style={styles.input} autoCapitalize="none" placeholder="Password" secureTextEntry={true} component={TInput} name={'password'} />
                <Button
                    title = "Login"
                    color = "#050505"
                    style = {{backgroundColor:'silver'}}
                    onPress = {handleSubmit(onLogin)}
                    />
            </View>
            )
   }
}

/*
        return(
            <View style={styles.container}>
                <View>
                    <Field component={TInput} />
                    <TextInput style={styles.input} placeholder="Username" autoCapitalize="none" 
                    ref = {(el) => { this.username = el; }}
                    onChangeText = {(username) => this.setState({username})}
                    value = {this.state.username}
                    />
                </View>
                <View>
                    <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} 
                    ref =  { (el) => {this.password = el }}
                    onChangeText = {(password) => this.setState({password})}
                    value = {this.state.password}
                    />
                </View>
                <Button
                title = "Login"
                color = "#050505"
                style = {{backgroundColor:'silver'}}
                onPress = {()=> onLogin({username:this.state.username, password:this.state.password})}
                />
            </View>
            )
 
*/

export default reduxForm({ form: 'login' })(LoginScreen); 

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        borderColor:'#003399',
        borderWidth:1

    },
    input:{
        height:40,
        width:200,
        borderWidth:1,
        borderColor:'gray',
        margin:10
    }
})