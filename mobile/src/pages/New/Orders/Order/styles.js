import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 13px 18.5px 18.5px 14.5px;
  margin-bottom: 29px;
`;

export const HeaderStyled = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`;

export const NameText = styled.Text`
  color: #7d40e7;
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
`;

export const Body = styled.View`
  display: flex;
  align-items: flex-start;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
`;

export const Footer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  background: #f8f9fd;
`;

export const FlexDiv = styled.View`
  display: flex;
`;

export const Line = styled.View`
  height: 1px;
  width: 250px;
  border: 1px solid #7d40e7;
  background: #7d40e7;
  position: absolute;
  top: 4px;
  left: 30;
`;

export const Title = styled.Text`
  color: #999999;
  font-size: 8px;
  font-weight: bold;
`;

export const Name = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #444444;
`;

export const Detail = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #7d40e7;
`;

export const Ball = styled.View`
  border: 1px solid #7d40e7;
  background: ${props => (props.checked ? '#7D40E7' : '#fff')};
  width: 9px;
  height: 9px;
  border-radius: 4.5px;
`;

export const Div = styled.View`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 26px;
`;

export const Status = styled.Text`
  color: #999999;
  font-size: 8px;
  width: 50px;
  text-align: center;
  margin-top: 7px;
`;
