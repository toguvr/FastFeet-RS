import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';
import Avatar from '~/components/Avatar';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 20px 0 30px;
`;

export const Title = styled.Text`
  font-size: 12px;
  color: #666666;
  margin-top: 15px;
`;

export const Name = styled.Text`
  font-size: 22px;
  color: #444444;
  font-weight: bold;
  margin-top: 7px;
`;

export const AvatarStyled = styled(Avatar)``;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 36 },
})`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const LogoutButton = styled(Button)`
  margin-top: 30px;
  background: #e74040;
`;
