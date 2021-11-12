import styled from 'styled-components/native';

export const Container = styled.View`
background-color: ${props => props.backgroundColor || 'transparent'};
align-content: center;
justify-content: center;


`;

export const Text = styled.Text`
text-align: ${props => props.textAlign || 'left'}
  color: ${props => props.color || 'black'};
  font-size: ${props => props.fontSize || '18px ' };
  margin-bottom: ${props => props.marginBottom || '0' };
  margin-top: ${props => props.marginTop || '0' };
  margin-left: ${props => props.marginLeft || '0' };
  margin-right: ${props => props.marginRight || '0' };
  font-weight: ${props => props.fontWeight || 'normal' };
  justify-content: ${props => props.justifyContent || 'center' };
  align-items: ${props => props.alignItems || 'center' };
  align-content: ${props => props.alignContent || 'center' };
  align-self: ${props => props.alignself || 'center' };

`;
