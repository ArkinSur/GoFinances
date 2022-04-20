/* eslint-disable import/no-duplicates */

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import * as S from './styles';

interface Category {
  name: string;
  icon: string;
}

export interface Data {
  key: string;
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: Category;
  date: number;
}

interface Props {
  data: Data;
}

export function TransactionCard({ data }: Props) {
  const { name, amount, category, date, type } = data;
  return (
    <S.Container>
      <S.Title>{name}</S.Title>
      <S.Amount type={type}>
        {type === 'positive' ? '+ ' : '- '}
        {amount}
      </S.Amount>

      <S.Footer>
        <S.Category>
          <S.Icon name={category?.icon ?? 'shopping-bag'} />
          <S.CategoryName>{category?.name}</S.CategoryName>
        </S.Category>
        <S.Date>{format(date, 'dd/MM/yyyy', { locale: ptBR })}</S.Date>
      </S.Footer>
    </S.Container>
  );
}
