import { FC } from 'react';
import { SvgProps } from 'react-native-svg';
import * as S from './styles';

interface Props {
  Icon: FC<SvgProps>;
  title: string;
}

export function SocialButton({ Icon, title }: Props) {
  return (
    <S.Container>
      <Icon />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
