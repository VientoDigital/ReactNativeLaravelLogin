import React from 'react';
import { AsyncStorage } from 'react-native'
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import immutableTransform from 'redux-persist-transform-immutable'
import store from './App/Store'
import Root from './App/Root'



export default class App extends React.Component {
  componentDidMount(){
    persistStore(store, {storage:AsyncStorage, transforms: [immutableTransform()],whitelist:['auth']} )
  }
  render() {
    return (
      <Provider store={store}>
        <Root /> 
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
