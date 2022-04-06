import * as S from './styles';

interface Category {
  name: string;
  icon: string;
}

export interface Data {
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  category: Category;
  date: string;
}

interface Props {
  data: Data;
}

export function TransactionCard({ data }: Props) {
  const { title, amount, category, date, type } = data;
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Amount type={type}>
        {type === 'positive' ? '+ ' : '- '}
        {amount}
      </S.Amount>

      <S.Footer>
        <S.Category>
          <S.Icon name={category.icon} />
          <S.CategoryName>{category.name}</S.CategoryName>
        </S.Category>
        <S.Date>{date}</S.Date>
      </S.Footer>
    </S.Container>
  );
}
