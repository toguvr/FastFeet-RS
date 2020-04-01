import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 36 },
})`
  flex: 1;
  padding-left: 36px;
`;

export const OrderList = styled.FlatList`
  padding: 0 20px;
  margin: 20px;
`;

export const Provider = styled(RectButton)`
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  flex: 1;

  align-items: center;
  margin: 0 10px 20px;
`;

export const Title = styled.Text`
  font-size: 12px;
  color: #666666;
  margin-top: 15px;
  margin-bottom: 7px;
`;

export const Name = styled.Text`
  font-size: 22px;
  color: #444444;
  font-weight: bold;
`;

export const Header = styled.SafeAreaView`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 20px;
`;

export const ViewStyled = styled.View`
  align-self: flex-start;
  flex-direction: row;
`;

export const FlexView = styled.View`
  display: flex;
  margin-left: 25px;
`;

export const FlexFilter = styled.View`
  display: flex;
  flex-direction: row;
`;

export const SubHeader = styled.View`
  display: flex;
  margin-top: 22.5px;
  margin-bottom: 10.5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;
`;

export const Filter = styled.Text`
  margin-left: 15px;

  ${props =>
    props.checked &&
    css`
      text-decoration: underline;
      color: #7d40e7;
      text-decoration-color: #7d40e7;
    `}
`;
