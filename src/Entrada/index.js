import React from 'react';
import {Input} from './styles';

function Entrada(props) {
  return (
    <Input
    value={props.value}
      width={props.width}
      color={props.color}
      height={props.height}
      keyboardType={props.keyboardType || 'default'}
      multiline={true}
      fontSize={props.fontSize}
      numberOfLines={props.numberOfLines || 1}
      secureTextEntry={props.secureTextEntry || false}
      onKeyPress={props.onKeyPress}
      onFocus={props.onFocus}
      onChangeText={props.onChangeText}
      isFocused={props.isFocused}
      borderRadius={props.borderRadius}
      marginTop={props.marginTop}
      marginRight={props.marginRight}
      marginBottom={props.marginBottom}
      marginLeft={props.marginLeft}
      alignSelf={props.alignSelf}
      elevation={props.elevation}
      borderColor={props.borderColor}
      backgroundColor={props.backgroundColor}>
      {props.children}
    </Input>
  );
}

export default Entrada;
