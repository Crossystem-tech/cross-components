import styled from 'styled-components/native';
import {tema} from '../../config/tema';

export const Container = styled.View`
  border-bottom-left-radius: ${props => props.borderBottomLeftRadius || '0'};
  border-bottom-right-radius: ${props => props.borderBottomRightRadius || '0'};
  border-top-left-radius: ${props => props.borderTopLeftRadius || '0'};
  border-top-right-radius: ${props => props.borderTopRightRadius || '0'};
  flex: ${props => props.flex || 'none'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'flex-start'};
  align-content: ${props => props.alignContent || 'flex-start'};
  flex-direction: ${props => props.flexDirection || 'column'};
  opacity: ${props => props.opacity || '1'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  elevation: ${props => props.elevation || 0};
  background-color: ${props => props.backgroundColor || tema.branco};
  top: ${props => props.top || '0'};
  left: ${props => props.left || '0'};
  right: ${props => props.right || '0'};
  bottom: ${props => props.bottom || '0'};
  border-top-color: ${props => props.borderTopColor || 'transparent'};
  border-bottom-color: ${props => props.borderBottomColor || 'transparent'};
  border-left-color: ${props => props.borderLeftColor || 'transparent'};
  border-right-color: ${props => props.borderRightColor || 'transparent'};

  border-top-width: ${props => props.borderTopWidth || '0'};
  border-bottom-width: ${props => props.borderBottomWidth || '0'};
  border-left-width: ${props => props.borderLeftWidth || '0'};
  border-right-width: ${props => props.borderRightWidth || '0'};

  margin-top: ${props => props.marginTop || '0'};
  margin-left: ${props => props.marginLeft || '0'};
  margin-bottom: ${props => props.marginBottom || '0'};
  margin-right: ${props => props.marginRight || '0'};

  position: ${props => props.position || 'relative'};
  z-index: ${props => props.zIndex || '0'};
`;
