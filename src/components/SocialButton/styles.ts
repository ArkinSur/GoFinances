import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.shape};
  width: 75%;
  height: ${RFValue(48)}px;
  padding: 0 24px;
  border-radius: 5px;
  margin-bottom: 20px;
  transform: translateY(-30px);
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.textDark};
  margin-left: ${RFValue(20)}px;
`;
