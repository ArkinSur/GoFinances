import { useState, useEffect, useCallback } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { HistoryCard } from '../../components/HistoryCard';
import * as S from './styles';
import { DataKey } from '../../utils/keys';
import { Data } from '../../components/TransactionCard';
import { categories } from '../../utils/categories';

export function Resume() {
  const [transactions, setTransactions] = useState([]);
  const { getItem } = useAsyncStorage(DataKey);

  const loadData = async () => {
    try {
      const data = await getItem();
      if (data) {
        const formatedData: Data[] = JSON.parse(data);
        const expensives: Data[] = formatedData.filter((item) => item.type === 'negative');

        const totalByCategory: Array<{ name: string; total: number }> = [];

        categories.forEach((category) => {
          let categorySum = 0;

          expensives.forEach((expensive) => {
            if (expensive.category.key === category.key) {
              categorySum += Number(expensive.amount.replace(/[^\d]/g, '')) / 100;
            }
          });

          if (categorySum > 0)
            totalByCategory.push({
              name: category.name,
              total: categorySum
            });
        });
        console.log(totalByCategory);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  return (
    <S.Container>
      <S.Header>
        <S.Title>Resumo por categoria</S.Title>
      </S.Header>

      <HistoryCard title="Teste" amount="20" color="#2e5" />
    </S.Container>
  );
}
