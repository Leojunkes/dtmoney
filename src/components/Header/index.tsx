import { useState } from 'react';
import logoImg from '../../assets/Logo.svg';
import { Container, Content } from './styles';
import Modal from 'react-modal';

type HeaderProps={
  onOpenNewTransactionModal:()=>void;
}

export function Header({ onOpenNewTransactionModal}:HeaderProps) {
  


  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button onClick={onOpenNewTransactionModal} type="button">
          Nova transação
        </button>
       
      </Content>
    </Container>
  );
}
