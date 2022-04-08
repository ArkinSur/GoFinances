import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${RFValue(16)}px;
  border-radius: 5px;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: 'Poppins_500Medium';
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
`;
