import React, { useState } from 'react';
import { Header } from './components/Header/index';
import { Dashboard } from './components/Dashboard/index';
import Modal from 'react-modal';
import { NewTransactionModal } from './NewTransactionModal';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  );

  function handleOpenModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseModal}
      />
    </>
  );
}
