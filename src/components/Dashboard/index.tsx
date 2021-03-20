import React from 'react';
import { Summary } from '../Summary';
import { Transaction } from '../transactionsTable';
import { Container } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <Transaction/>
    </Container>
  );
}
