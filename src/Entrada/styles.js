import styled from 'styled-components/native';

export const Container = styled.View`
  text-align: left;
  background: transparent;
  border-radius: 10px;
  margin: 10px;
  flex: none;
  border-color: ${props => props.borderColor || props.theme.verde};
  border-bottom-width: 2;
  border-top-width: 2;
  border-left-width: 2;
  border-right-width: 2;
  justify-content: center;
  align-items: center;
  width: ${props => props.width || '95%'};
`;

export const Titulo = styled.Text`
  margin-top: -14;
  margin-left: 15;
  text-align: left;
  background-color: ${props => props.backgroundColor || 'white'};
  padding-left: 1;
  padding-right: 5;

  align-self: flex-start;
  color: ${props => props.color || 'green'};
  font-size: 14px;
`;

export const ContainerInput = styled.View`
  text-align: left;
  background: transparent;
  margin: 0px;
  flex: none;
  justify-content: flex-start;
  margin-left: 10;
  align-items: center;
  width: 100%;
  flex-direction: row;
`;

export const Input = styled.TextInput`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '70px'};
  border-width: ${props => props.width || '1px'};
  border-color: ${props => props.borderColor || 'black'};
  border-radius: ${props => props.borderRadius || '15px'};
  align-self: ${props => props.alignSelf || 'flex-start'}
  margin-top: ${props => props.marginTop || '0'}
  margin-right: ${props => props.marginRight || '0'}
  margin-bottom: ${props => props.marginBottom || '0'}
  margin-left: ${props => props.marginLeft || '0'}
  color: ${props=> props.color || "black"};
  font-size: ${props => props.fontSize || '16px'};
  elevation: ${props => props.elevation || '0'}
  background-color: ${props => props.backgroundColor || 'white'};
`;

export const Icone = styled.TouchableOpacity`
  background-color: transparent;
  flex: 1;
  align-self: center;
  text-align: center;
  align-content: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: -5;
  margin-right: 0;
`;
