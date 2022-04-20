import { RectButtonProps } from 'react-native-gesture-handler';
import * as S from './styles';

interface Props extends RectButtonProps {
  title: string;
  type: 'up' | 'down';
  selected?: boolean;
}

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
};

export function TransactionTypeButton({ title = '', type, selected, ...rest }: Props) {
  return (
    <S.Wrapper selected={selected} type={type}>
      <S.Container {...rest}>
        <S.Icon name={icons[type]} type={type} />
        <S.Title>{title}</S.Title>
      </S.Container>
    </S.Wrapper>
  );
}
