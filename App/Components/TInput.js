import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

export default class TInput extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const { input, ...inputProps } = this.props;
    return (
      <View>
        <TextInput
          {...inputProps}
          onChangeText={input.onChange}
          onBlur={input.onBlur}
          onFocus={input.onFocus}
          value={input.value}
          />
      </View>
    )
  }
}