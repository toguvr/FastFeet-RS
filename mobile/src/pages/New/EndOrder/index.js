import React, { useRef, useState, useEffect } from 'react';
import { StatusBar, Alert } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';
import delivery from '~/assets/Rectangle.png';
import {
  Container,
  PurpleBack,
  ImageBackgroundStryled,
  Photo,
  Camera,
  CurrentPhoto
} from './styles';
import Button from '~/components/Button';
import { updateOrders } from '~/store/modules/order/actions';
import api from '~/services/api';

export default function EndOrder() {
  // const loading = useSelector(state => state.order.loading);
  const order = useSelector(state => state.order.order);
  const dispatch = useDispatch();

  const cameraRef = useRef(null);
  const [flash, setFlash] = useState('auto');
  const [zoom, setZoom] = useState(0);
  const [autoFocus, setAutoFocus] = useState('on');
  const [depth, setDepth] = useState(0);
  const [type, setType] = useState('back');
  const [permission, setPermission] = useState('undetermined');
  const [file, setFile] = useState({uri: null});
  const [loading, setLoading] = useState(false);

  function toggleFlash() {
    setFlash(flashModeOrder[flash]);
  }

  function zoomOut() {
    setZoom(zoom - 0.1 < 0 ? 0 : zoom - 0.1);
  }

  function zoomIn() {
    setZoom(zoom + 0.1 > 1 ? 1 : zoom + 0.1);
  }

  async function takePicture() {
    if(file.uri){
      setFile({uri: null})
    }else{
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      setFile(data);
    }
  }
  }

  async function handleSubmit() {
    setLoading(true)
    const body = new FormData();
    body.append('file', {
      type: 'image/jpg',
      uri: file.uri,
      name: file.uri,
    })
    const response = await api.put(`endorders/${order.id}`, body);
    Alert.alert('Sucesso!', 'Entrega atualizada com sucesso');
    setFile({uri: null})
    setLoading(false)
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <PurpleBack />
      <ScrollView showsVerticalScrollIndicator={false}>
       <ImageBackgroundStryled source={delivery}>

          {!file.uri && <Camera
            ref={cameraRef}
            type={type}
            flashMode={flash}
            androidCameraPermissionOptions={{
              title: 'Permissão para usar a camera',
              message: 'Nós precisamos de sua permissão para usar a camera',
              buttonPositive: 'Permitir',
              buttonNegative: 'Não permitir',
            }}
            />}
            {file.uri && <CurrentPhoto source={{uri: file.uri}}/>}
          <Photo onPress={takePicture}>
            <Icon name="camera-alt" size={24} color="#fff" />
          </Photo>
        </ImageBackgroundStryled>
        <Button loading={loading} onPress={handleSubmit}>
          Enviar
        </Button>
      </ScrollView>
    </Container>
  );
}

// OrderInfo.propTypes = {};
