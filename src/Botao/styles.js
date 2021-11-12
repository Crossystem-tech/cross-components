import styled from 'styled-components/native';
import {tema} from '../../config/tema';

export const RoundedTouchableOpacity = styled.TouchableOpacity`
position: ${props => props.position || 'relative'}
  flex-direction: ${props => props.flexDirection || 'column'};
  height: ${props => props.height || '50'};
  color: ${props => props.color || 'white'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-self: ${props => props.alignSelf || 'flex-start'}
  align-items: ${props => props.alignItems || 'flex-start'};
  background-color: ${props => props.backgroundColor || 'grey'};
  border-radius: ${props => props.borderRadius || '50px'};
  margin-top: ${props => props.marginTop || '5px'};
  margin-bottom: ${props => props.marginBottom || '5px'};
  margin-left: ${props => props.marginLeft || '5px'};
  margin-right: ${props => props.marginRight || '5px'};
  elevation: ${props => props.elevation || '0'}
  border-color: ${props => props.borderColor || 'black'};
  border-bottom-width: ${props => props.borderBottomWidth || '1'};
  border-top-width: ${props => props.borderTopWidth || '1'};
  border-left-width: ${props => props.borderLeftWidth || '1'};
  border-right-width: ${props => props.borderRightWidth || '1'};
  width: ${props => props.width || '97%'};
  flex-direction: ${props => props.flexDirection || 'column'}
  padding: ${props => props.padding || '0'}
`;
