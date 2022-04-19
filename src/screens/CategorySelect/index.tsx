import { useCallback } from 'react';
import { FlatList } from 'react-native';
import { Button } from '../../components/Form/Button';
import { categories } from '../../utils/categories';
import * as S from './styles';

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: string;
  setCategory: (_value: Category) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect({ category, setCategory, closeSelectCategory }: Props) {
  const handleSeparator = useCallback(() => <S.Separator />, []);

  return (
    <S.Container>
      <S.Header>
        <S.Title>Categoria</S.Title>
      </S.Header>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          return (
            <S.Category onPress={() => setCategory(item)} isActive={category === item.name}>
              <S.Icon name={item.icon} />
              <S.Name>{item.name}</S.Name>
            </S.Category>
          );
        }}
        ItemSeparatorComponent={handleSeparator}
      />
      <S.Footer>
        <Button activeOpacity={0.6} title="Selecionar" onPress={closeSelectCategory} />
      </S.Footer>
    </S.Container>
  );
}
