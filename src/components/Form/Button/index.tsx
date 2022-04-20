import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

export function Button({ title = 'B', ...rest }: Props) {
  return (
    <S.Container activeOpacity={0.6} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
