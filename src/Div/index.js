import React, {Children} from 'react';
import {Container} from './style';

function Div(props) {
  return (
    <Container
      backgroundColor={props.backgroundColor}
      borderBottomLeftRadius={props.borderBottomLeftRadius}
      borderBottomRightRadius={props.borderBottomRightRadius}
      borderTopLeftRadius={props.borderTopLeftRadius}
      borderTopRightRadius={props.borderTopRightRadius}
      flex={props.flex}
      pointerEvents={props.pointerEvents}
      opacity={props.opacity}
      alignSelf={props.alignSelf}
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
      alignContent={props.alignContent}
      flexDirection={props.flexDirection}
      width={props.width}
      height={props.height}
      borderTopColor={props.borderTopColor}
      borderBottomColor={props.borderBottomColor}
      borderLeftColor={props.borderLeftColor}
      borderRightColor={props.borderRightColor}
      borderTopWidth={props.borderTopWidth}
      borderBottomWidth={props.borderBottomWidth}
      borderLeftWidth={props.borderLeftWidth}
      borderRightWidth={props.borderRightWidth}
      marginTop={props.marginTop}
      marginBottom={props.marginBottom}
      marginLeft={props.marginLeft}
      marginRight={props.marginRight}
      position={props.position}
      zIndex={props.zIndex}
      elevation={props.elevation}
      onPress={props.onPress}
      top={props.top}
      left={props.left}
      right={props.right}
      bottom={props.bottom}

      >
      {props.children}
    </Container>
  );
}

export default Div;
