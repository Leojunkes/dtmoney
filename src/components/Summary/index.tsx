import { Container } from './styles';
import entradasImg from '../../assets/Entradas.svg';
import saidasImg from '../../assets/Saídas.svg';
import totalImg from '../../assets/Total.svg';
import { useContext } from 'react';
import { TransactionsContext } from '../Context/TransactionsContext';

export function Summary() {
  const transactions = useContext(TransactionsContext);
  console.log(transactions);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradasImg} alt="Entradas" />
        </header>
        <strong>1.000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={saidasImg} alt="Saídas" />
        </header>
        <strong>- 500</strong>
      </div>

      <div className="fundo-destaque">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>500</strong>
      </div>
    </Container>
  );
}
