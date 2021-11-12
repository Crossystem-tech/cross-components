import React, { Children } from 'react';
import {Container, Text} from './styles';

function Texto(props) {
  return (
    <Container backgroundColor={props.backgroundColor||'transparent'}>
      <Text
      textAlign={props.textAlign}
      fontSize={props.fontSize} 
      color={props.color}
      marginBottom={props.marginBottom} 
      marginTop={props.marginTop} 
      marginLeft={props.marginLeft} 
      marginRight={props.marginRight} 
      margin={props.margin} 
      fontWeight={props.fontWeight} 
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
      alignContent={props.alignContent}
      alignSelf={props.alignSelf}
          >
            {props.children}
      </Text>

    </Container>
  );
}

export default Texto;
