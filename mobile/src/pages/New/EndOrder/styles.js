import styled from 'styled-components/native';

import { RNCamera } from 'react-native-camera';

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

export const Card = styled.View`
  padding: 17px 19px;
  background: #ffffff;
  border-radius: 4px;
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ImageBackgroundStryled = styled.ImageBackground`
  border-radius: 4px;
  margin: 30px 0 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 440px;
`;

export const Photo = styled.View`
  margin-top: 360px;
  width: 60px;
  height: 60px;
  background: #0000004d;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const CameraContainer = styled.View`
  border-radius: 4px;
  margin: 30px 0 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 440px;
`;

export const Camera = styled(RNCamera)`
  border-radius: 4px;
  margin: 30px 0 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 440px;
  width: 100%;
  position: absolute;
`;
