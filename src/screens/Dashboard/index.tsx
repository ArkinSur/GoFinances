import { StatusBar } from 'react-native';
import { HighLightCard } from '../../components/HighLightCard';
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  IconButton,
  Icon,
  HighLightCards
} from './styles';

export function Dashboard() {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/37552311?v=4' }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Filipe</UserName>
            </User>
          </UserInfo>
          <IconButton>
            <Icon name="power" />
          </IconButton>
        </UserWrapper>
      </Header>
      <HighLightCards>
        <HighLightCard
          title="Entrada"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
          type="up"
        />
        <HighLightCard
          title="Saída"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 13 de abril"
          type="down"
        />
        <HighLightCard
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
          type="total"
        />
      </HighLightCards>
    </Container>
  );
}
