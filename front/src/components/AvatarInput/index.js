import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { MdPhoto } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Container } from './styles';
import api from '~/services/api';
import { addAvatarId } from '~/store/deliveryman/reducer';

export default function AvatarInput() {
  const dispatch = useDispatch();
  const { defaultValue, registerField } = useField('avatar');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const token = localStorage.getItem('token');
    const data = new FormData();
    data.append('file', e.target.files[0]);

    const response = await api.post('files', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { id, url } = response.data;
    dispatch(addAvatarId(id));
    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={
            preview || 'https://api.adorable.io/avatars/50/abott@adorable.png'
          }
          alt=""
        />
        <input
          onChange={handleChange}
          id="avatar"
          accept="image/*"
          data-file={file}
          type="file"
          ref={ref}
        />
      </label>
    </Container>
  );
}
