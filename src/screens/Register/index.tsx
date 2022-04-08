import { useState } from 'react';
import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import * as S from './styles';

export function Register() {
  const [buttonSelected, setButtonSelected] = useState<'income' | 'outcome' | null>(null);

  const handleSelection = (value: 'income' | 'outcome') => {
    if (value === buttonSelected) setButtonSelected(null);
    else setButtonSelected(value);
  };

  return (
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
        </S.Fields>
        <Button title="Enviar" />
      </S.Form>
    </S.Container>
  );
}
