import { useState } from 'react';
import { Modal, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { v4 } from 'uuid';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useTheme } from 'styled-components/native';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import * as S from './styles';
import { CategorySelect as CategorySelectButton } from '../../components/CategorySelect';
import { CategorySelect } from '../CategorySelect';
import { InputForm } from '../../components/Form/InputForm';
import { DataKey } from '../../utils/keys';

interface Category {
  key: string;
  name: string;
}

interface FormData {
  name: string;
  amount: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Required'),
  amount: Yup.number().typeError('Invalid type').positive('Positve').required('Required')
});

// @ts-ignore
export function Register({ navigation }) {
  const [category, setCategory] = useState<Category>({ key: 'category', name: 'Categoria' });
  const [buttonSelected, setButtonSelected] = useState<'income' | 'outcome' | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const theme = useTheme();
  const { setItem, getItem } = useAsyncStorage(DataKey);

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

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const handleRegister = async (values: FormData) => {
    if (!buttonSelected) return;
    if (category.name === 'category') return;
    const data = {
      key: v4(),
      name: values.name,
      amount: Number(values.amount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
      type: buttonSelected === 'income' ? 'positive' : 'negative',
      category,
      date: new Date().getTime()
    };

    try {
      const currentData = await getItem();
      const newData = currentData ? [data, ...JSON.parse(currentData)] : [data];
      await setItem(JSON.stringify(newData));
      reset();
      setButtonSelected(null);
      setCategory({ key: 'category', name: 'Categoria' });
      navigation.navigate('Listagem');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <S.Header>
            <S.Title>Cadastro</S.Title>
          </S.Header>

          <S.Form>
            <S.Fields>
              <InputForm
                control={control}
                name="name"
                placeholder="Nome"
                autoCapitalize="sentences"
              />
              {errors.name && (
                <Text style={{ marginBottom: 8, color: 'red' }}>{errors.name.message}</Text>
              )}
              <InputForm
                control={control}
                name="amount"
                placeholder="Preço"
                keyboardType="numeric"
              />
              {errors.amount && (
                <Text style={{ marginBottom: 8, color: 'red' }}>{errors.amount.message}</Text>
              )}
              <S.TransactionButtonsContainer>
                <TransactionTypeButton
                  rippleColor={theme.colors.successLight}
                  underlayColor={theme.colors.successLight}
                  selected={buttonSelected === 'income'}
                  onPress={() => handleSelection('income')}
                  type="up"
                  title="Income"
                />
                <TransactionTypeButton
                  rippleColor={theme.colors.errorLight}
                  underlayColor={theme.colors.errorLight}
                  selected={buttonSelected === 'outcome'}
                  onPress={() => handleSelection('outcome')}
                  type="down"
                  title="Outcome"
                />
              </S.TransactionButtonsContainer>
              <CategorySelectButton title={category.name} onPress={handleOpenSelectCategory} />
            </S.Fields>
            <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
          </S.Form>
        </S.Container>
      </TouchableWithoutFeedback>
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
