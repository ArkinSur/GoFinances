import { RFValue } from 'react-native-responsive-fontsize';
import * as S from './styles';
import Logo from '../../assets/logo.svg';
import AppleLogo from '../../assets/apple.svg';
import GoogleLogo from '../../assets/google.svg';
import { SocialButton } from '../../components/SocialButton';
import { useAuth } from '../../hooks/useAuth';

export function SignIn() {
  const { user } = useAuth();

  console.log(user);
  return (
    <S.Container>
      <S.Header>
        <S.TitleWrapper>
          <Logo width={RFValue(130)} height={RFValue(78)} />
          <S.Title>Controle suas finanças de forma muito simples</S.Title>
        </S.TitleWrapper>
        <S.SignInTitle>Faça seu login com uma das contas abaixo</S.SignInTitle>
      </S.Header>
      <S.Footer>
        <SocialButton Icon={GoogleLogo} title="Entrar com Google" />
        <SocialButton Icon={AppleLogo} title="Entrar com Apple" />
      </S.Footer>
    </S.Container>
  );
}
