import { useState } from 'react';
import { Modal } from 'react-native';
import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import * as S from './styles';
import { CategorySelect as CategorySelectButton } from '../../components/CategorySelect';
import { CategorySelect } from '../CategorySelect';

interface Category {
  key: string;
  name: string;
}

export function Register() {
  const [category, setCategory] = useState<Category>({ key: '1', name: 'Categoria' });
  const [buttonSelected, setButtonSelected] = useState<'income' | 'outcome' | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelection = (value: 'income' | 'outcome') => {
    if (value === buttonSelected) setButtonSelected(null);
    else setButtonSelected(value);
  };

  const handleCloseSelectCategory = () => {
    setModalVisible(false);
  };

  const handleOpenSelectCategory = () => {
    setModalVisible(true);
  };

  return (
    <>
      <S.Container>
        <S.Header>
          <S.Title>Cadastro</S.Title>
        </S.Header>

        <S.Form>
          <S.Fields>
            <Input placeholder="Nome" />
            <Input placeholder="Preço" />
            <S.TransactionButtonsContainer>
              <TransactionTypeButton
                selected={buttonSelected === 'income'}
                onPress={() => handleSelection('income')}
                type="up"
                title="Income"
              />
              <TransactionTypeButton
                selected={buttonSelected === 'outcome'}
                onPress={() => handleSelection('outcome')}
                type="down"
                title="Outcome"
              />
            </S.TransactionButtonsContainer>
            <CategorySelectButton title={category.name} onPress={handleOpenSelectCategory} />
          </S.Fields>
          <Button title="Enviar" />
        </S.Form>
      </S.Container>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        statusBarTranslucent
        onRequestClose={() => setModalVisible(false)}
      >
        <CategorySelect
          category={category.name}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategory}
        />
      </Modal>
    </>
  );
}
