import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import closeImg from '../assets/Botão - Fechar.svg';
import entradaImg from '../assets/Entradas.svg';
import saidaImg from '../assets/Saídas.svg';
import { FormEvent, useState } from 'react';
import { api } from '../services/api';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();
    const data = {
      title,
      value,
      category,
      type,
    };
    api.post('/transactions', data);
  }

  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container>
        <form onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar transação</h2>

          <input
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="number"
            placeholder="Valor"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />

          <TransactionTypeContainer>
            <RadioBox
              type="button"
              isActive={type === 'deposit'}
              activeColor="green"
              onClick={() => {
                setType('deposit');
              }}
            >
              <img src={entradaImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>
            <RadioBox
              type="button"
              isActive={type === 'withdraw'}
              activeColor="red"
              onClick={() => {
                setType('withdraw');
              }}
            >
              <img src={saidaImg} alt="Saída" />
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>

          <input
            placeholder="Categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </form>
      </Container>
    </Modal>
  );
}
