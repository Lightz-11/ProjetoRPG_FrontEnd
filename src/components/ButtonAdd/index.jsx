import { Container } from './styles';
import { MdOutlineAddBox } from 'react-icons/md'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { useDisabled } from '../../hooks/useDisabled';

export function ButtonAdd({ onClick }) {

  const { disabled } = useDisabled()

  return (
    <Container>
      <button disabled={disabled} onClick={onClick}>
        <MdOutlineAddBox size={25} />
      </button>
    </Container>
  );
}