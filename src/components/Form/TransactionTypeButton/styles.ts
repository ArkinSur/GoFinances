import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface TypeProps {
  type: 'up' | 'down';
}

interface ContainerProps {
  selected?: boolean;
  type: 'up' | 'down';
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 48%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.text};
  padding: 16px;
  ${({ selected, type, theme }) =>
    selected &&
    css`
      background-color: ${type === 'up' ? theme.colors.successLight : theme.colors.errorLight};
      border-color: ${type === 'up' ? theme.colors.successLight : theme.colors.errorLight};
    `}
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(24)}px
  margin-right: 12px;
  color: ${({ theme, type }) => (type === 'up' ? theme.colors.success : theme.colors.error)}
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
