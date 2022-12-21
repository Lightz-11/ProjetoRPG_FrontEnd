import { BodyContainer, Container, HeaderContainer } from './styles';
import { useState, useEffect } from 'react';
import { api } from '../../../../services/api';
import { Modal } from '../../../../components/Modals/Modal';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom'
import { ButtonEdit } from '../../../../components/ButtonEdit';
import { AtributoButton } from '../../../../components/AtributoButton';

export function AtributoContainer({ data }) {

  return (
    <Container>

      <HeaderContainer>
        <h1>Atributos</h1>
        <ButtonEdit />
      </HeaderContainer>

      <hr />

      <BodyContainer>

        <AtributoButton agi={data && data.agi} forca={data && data.for} int={data && data.int} pre={data && data.pre} vig={data && data.vig} />

      </BodyContainer>

      <ToastContainer />

    </Container>
  );
}