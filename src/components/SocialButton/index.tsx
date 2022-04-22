import { FC } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
import * as S from './styles';

interface Props extends RectButtonProps {
  Icon: FC<SvgProps>;
  title: string;
}

export function SocialButton({ Icon, title }: Props) {
  return (
    <S.Container>
      <S.IconWrapper>
        <Icon />
      </S.IconWrapper>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
