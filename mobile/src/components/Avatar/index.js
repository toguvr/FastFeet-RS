// import { Container } from './styles';

import React from 'react';
import { Image, Text } from 'react-native';

import PropTypes from 'prop-types';

import { Container, TextStyled, ImageStyled } from './styles';

export default function Avatar({
  name,
  color,
  width,
  url,
  size,
  top,
  mBottom,
}) {
  function cutName(str) {
    const arr = str.split(' ');

    if (arr[0] && arr[1]) {
      if (arr[1][0].toUpperCase() != arr[1][0]) arr.splice(1, 1);
      arr[0] = arr[0].substr(0, 1);
      arr[1] = arr[1].substr(0, 1);
    } else {
      arr[0] = arr[0].substr(0, 1);
    }
    return arr.slice(0, 2).join('');
  }
  if (url) {
    return (
      <ImageStyled
        width={width}
        mBottom={mBottom}
        top={top}
        source={{
          uri: `${url}`,
        }}
      />
    );
  }
  return (
    <Container mBottom={mBottom} top={top} color={color} width={width}>
      <TextStyled size={size}>{cutName(name)}</TextStyled>
    </Container>
  );
}

Avatar.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  url: PropTypes.string,
  top: PropTypes.number,
  mBottom: PropTypes.number,
  width: PropTypes.number,
  size: PropTypes.number,
};

Avatar.defaultProps = {
  color: '#F4EFFC',
  width: 35,
  name: 'Fast Feet',
  size: 60,
  top: 40,
  mBottom: 40,
};
