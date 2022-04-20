import { StatusBar, View } from 'react-native';
import { useCallback, useState } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { Data, TransactionCard } from '../../components/TransactionCard';
import { HighLightCard } from '../../components/HighLightCard';
import * as S from './styles';
import { DataKey } from '../../utils/keys';

export function Dashboard() {
  const [data, setData] = useState<Data[]>([]);

  const { getItem } = useAsyncStorage(DataKey);

  const renderHeader = useCallback(() => {
    return <S.Title>Listagem</S.Title>;
  }, []);

  const renderEmpty = useCallback(() => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <S.Title>Não há transações no momento</S.Title>
      </View>
    );
  }, []);

  async function loadData() {
    try {
      const transactions = await getItem();
      const formatedData = transactions ? JSON.parse(transactions) : [];
      setData(formatedData);
    } catch (error) {
      console.error(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  return (
    <S.Container>
      <StatusBar barStyle="light-content" />
      <S.Header>
        <S.UserWrapper>
          <S.UserInfo>
            <S.Photo source={{ uri: 'https://avatars.githubusercontent.com/u/37552311?v=4' }} />
            <S.User>
              <S.UserGreeting>Olá,</S.UserGreeting>
              <S.UserName>Filipe</S.UserName>
            </S.User>
          </S.UserInfo>
          <S.IconButton onPress={() => console.log('oi')}>
            <S.Icon name="power" />
          </S.IconButton>
        </S.UserWrapper>
      </S.Header>
      <S.HighLightCards>
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
      </S.HighLightCards>
      <S.Transactions>
        <S.TransactionList
          data={data}
          ListHeaderComponent={renderHeader}
          ListEmptyComponent={renderEmpty}
          renderItem={({ item }) => <TransactionCard data={item} />}
          keyExtractor={(item) => item.key}
        />
      </S.Transactions>
    </S.Container>
  );
}
