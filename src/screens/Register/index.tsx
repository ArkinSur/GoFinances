import { useState } from 'react';
import { Modal, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import * as S from './styles';
import { CategorySelect as CategorySelectButton } from '../../components/CategorySelect';
import { CategorySelect } from '../CategorySelect';
import { InputForm } from '../../components/Form/InputForm';

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
  const handleRegister = (values: FormData) => {
    console.log(values);
  };

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

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
