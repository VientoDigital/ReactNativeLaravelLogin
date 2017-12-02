import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Login from './Containers/Login'

export default class Root extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Login />
            </View>
            )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DDDDDD',
        alignItems:'center',
        justifyContent:'center'
    }
})