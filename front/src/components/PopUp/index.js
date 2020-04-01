import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Container, PopUpContainer } from './styles';

export default function PopUp({ children }) {
  useEffect(() => {
    console.log(open);
  }, [open]);
  return (
    <Container>
      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <PopUpContainer>{children}</PopUpContainer>
      </ClickAwayListener>
    </Container>
  );
}

PopUp.propTypes = {
  children: PropTypes.element.isRequired,
};
