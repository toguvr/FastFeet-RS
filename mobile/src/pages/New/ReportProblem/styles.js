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
  padding: 13px 30px 10px 12px;
  background: #ffffff;
  border-radius: 4px;
  margin-top: 30px;
  margin-bottom: 20px;
  height: 300px;
`;

export const TInput = styled.TextInput`
  font-size: 16px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #7d40e7;
  margin-left: 5px;
`;

export const Flex = styled.View`
  margin-top: 7px;
  margin-bottom: 7px;
`;

export const SubTitle = styled.Text`
  color: #999999;
  font-size: 14px;
  font-weight: bold;
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
