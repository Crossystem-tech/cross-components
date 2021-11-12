import React from 'react';
import {RoundedTouchableOpacity} from './styles';

function Botao(props) {
  return (
    <RoundedTouchableOpacity
    padding={props.padding}
    position={props.position}
    justifyContent={props.justifyContent}
    alignItems={props.alignItems}
      elevation={props.elevation}
      onPress={props.onPress}
      backgroundColor={props.backgroundColor}
      marginTop={props.marginTop}
      marginBottom={props.marginBottom}
      marginLeft={props.marginLeft}
      marginRight={props.marginRight}
      borderColor={props.borderColor}
      borderBottomWidth={props.borderBottomWidth}
      borderTopWidth={props.borderTopWidth}
      borderLeftWidth={props.borderLeftWidth}
      borderRightWidth={props.borderRightWidth}
      borderRadius={props.borderRadius}
      height={props.height}
      width={props.width}
      color={props.color}
      alignSelf={props.alignSelf}
      margin={props.margin}
      flexDirection={props.flexDirection}>
      {props.children}
    </RoundedTouchableOpacity>
  );
}

export default Botao;
