import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.View`
  border-radius: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width}px;
  height: ${props => props.width}px;
  background: ${props => props.color};
  margin-top: ${props => props.top};
  margin-bottom: ${props => props.mBottom};
  align-self: center;
`;

export const TextStyled = styled.Text`
  font-size: ${props => props.size};
  color: #a28fd0;
`;

export const ImageStyled = styled.Image`
  border-radius: 70px;
  display: flex;
  justify-content: center;
  align-self: center;
  width: ${props => props.width}px;
  height: ${props => props.width}px;
  margin-top: ${props => props.top};
  margin-bottom: ${props => props.mBottom};
`;
