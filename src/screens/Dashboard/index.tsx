import { StatusBar } from 'react-native';
import { useCallback } from 'react';
import { Data, TransactionCard } from '../../components/TransactionCard';
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
  HighLightCards,
  Transactions,
  Title,
  TransactionList
} from './styles';

export function Dashboard() {
  const data: Data[] = [
    {
      type: 'positive',
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00',
      category: { name: 'Vendas', icon: 'dollar-sign' },
      date: '13/04/2020'
    },
    {
      type: 'negative',
      title: 'Hamburgueria O Vei',
      amount: 'R$ 59,00',
      category: { name: 'Alimentação', icon: 'coffee' },
      date: '12/04/2020'
    },
    {
      type: 'negative',
      title: 'Alguel do apartamento',
      amount: 'R$ 1.200,00',
      category: { name: 'Casa', icon: 'shopping-bag' },
      date: '11/04/2020'
    },
    {
      type: 'positive',
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00',
      category: { name: 'Vendas', icon: 'dollar-sign' },
      date: '10/04/2020'
    }
  ];

  const renderHeader = useCallback(() => {
    return <Title>Listagem</Title>;
  }, []);

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
      <Transactions>
        <TransactionList
          data={data}
          ListHeaderComponent={renderHeader}
          renderItem={({ item }) => <TransactionCard data={item} />}
          keyExtractor={(item, index) => item.title + index.toString()}
        />
      </Transactions>
    </Container>
  );
}
