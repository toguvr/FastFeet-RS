import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width}px;
  height: ${props => props.width}px;
  background: ${props => props.color};
  color: ${props => darken(0.3, props.color.toString())};
`;

export const Photo = styled.div`
  img {
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.width}px;
    height: ${props => props.width}px;
    border: 1px solid ${props => props.color};
  }
`;
