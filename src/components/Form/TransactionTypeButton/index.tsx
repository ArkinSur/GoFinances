import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

interface Props extends TouchableOpacityProps {
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
    <S.Container {...rest} selected={selected} type={type}>
      <S.Icon name={icons[type]} type={type} />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
