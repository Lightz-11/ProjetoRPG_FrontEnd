import { Container, Button } from './styles';
import { MdOutlineEdit } from 'react-icons/md'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { useDisabled } from '../../hooks/useDisabled';

export function ButtonEdit({ onClick, size = 20, position, children }) {

  const { disabled } = useDisabled()

  return (
    <Container position={position}>
      {children

        ?

        <button disabled={disabled} onClick={onClick}>
          {children}
        </button>

        :

        <Button disabled={disabled} onClick={onClick}>
          <MdOutlineEdit size={size} color={'#42bb4d'} />
        </Button>

      }
    </Container>
  );
}