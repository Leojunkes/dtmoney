import { createContext, useState, useEffect, ReactNode } from 'react';
import { api } from '../../services/api';



interface TransactionsProps {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}
interface TransactionsProvider{
    children: ReactNode
}

export const TransactionsContext = createContext<TransactionsProps[]>([]);

export function TransactionsProvider({children}:TransactionsProvider) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  useEffect(() => {
    api
      .get('/transactions')

      .then((res) => setTransactions(res.data.transactions));
  }, []);
  return <TransactionsContext.Provider value={transactions}>
      {children}
  </TransactionsContext.Provider>;
}
