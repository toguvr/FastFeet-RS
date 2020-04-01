import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  position: relative;
`;

export const PurpleBack = styled.View`
  height: 100px;
  position: absolute;

  top: 0;
  right: 0;
  left: 0;
  background: #7d40e7;
`;

export const Name = styled.Text`
  color: #666666;
  font-size: 14px;
  margin-top: 5px;
`;

export const Card = styled.View`
  padding: 17px 19px;
  background: #ffffff;
  border-radius: 4px;
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 20px;
  width: 100%;
  text-align: center;
`;

export const Problem = styled.Text`
  color: #999999;
  font-size: 16px;
`;

export const DateText = styled.Text`
  color: #c1c1c1;
  font-size: 12px;
`;

export const Between = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Footer = styled.View`
  margin: 30px 0;
  background: #f8f9fd;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonText = styled.Text`
  color: #999999;
  font-size: 12px;
  text-align: center;
  width: 60px;
  margin: 2px 0;
`;

export const FlexButton = styled.TouchableOpacity`
  border: 1px solid #0000001a;
  align-items: center;
`;
