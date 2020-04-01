import React, { useState } from 'react';
import { MdRemoveRedEye, MdModeEdit, MdDeleteForever } from 'react-icons/md';
import { Container, ActionList } from './styles';

export default function Action({ view, edit, del }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }
  return (
    <Container>
      <div onClick={handleToggleVisible}>...</div>
      <ActionList visible={visible}>
        {view && (
          <>
            <li onClick={view}>
              <MdRemoveRedEye color="#8E5BE8" size={15} />
              <span>Visualizar</span>
            </li>

            <hr />
          </>
        )}
        {edit && (
          <li onClick={edit}>
            <MdModeEdit color="#4D85EE" size={15} />
            <span>Editar</span>
          </li>
        )}
        {del && (
          <>
            <hr />
            <li onClick={del}>
              <MdDeleteForever color="#DE3B3B" size={15} />
              <span>Excluir</span>
            </li>
          </>
        )}
      </ActionList>
    </Container>
  );
}
